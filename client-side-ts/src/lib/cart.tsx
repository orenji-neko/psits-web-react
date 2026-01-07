import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


export interface CartItem {
  uid: string; // stable unique id for this cart line
  id: number; // product id from backend
  name: string;
  price: number; 
  image: string;
  color?: string;
  size?: string;
  course?: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'uid'>) => void;
  removeItem: (uid: string) => void;
  updateQty: (uid: string, qty: number) => void;
  clear: () => void;
  total: number;
}

const STORAGE_KEY = 'psits_cart_v1';
const MAX_QTY = 999;

const CartContext = createContext<CartContextValue | undefined>(undefined);


function generateUid(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof (crypto as any).randomUUID === 'function') {
      return (crypto as any).randomUUID();
    }
  } catch (e) {

  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function sanitizeStoredItem(obj: any): CartItem | null {
  if (!obj || typeof obj !== 'object') return null;
  const id = Number(obj.id);
  const name = typeof obj.name === 'string' ? obj.name : '';
  const price = Number(obj.price);
  const image = typeof obj.image === 'string' ? obj.image : '';
  let qty = Number(obj.qty) || 0;

  if (!Number.isFinite(id) || id <= 0) return null;
  if (!Number.isFinite(price) || price < 0) return null;
  qty = Math.max(1, Math.min(MAX_QTY, Math.floor(qty)));

  const uid = typeof obj.uid === 'string' && obj.uid.length > 0 ? obj.uid : generateUid();

  return {
    uid,
    id,
    name: name.slice(0, 512),
    price,
    image,
    color: typeof obj.color === 'string' ? obj.color : undefined,
    size: typeof obj.size === 'string' ? obj.size : undefined,
    course: typeof obj.course === 'string' ? obj.course : undefined,
    qty,
  };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      const sanitized: CartItem[] = parsed
        .map(sanitizeStoredItem)
        .filter((i): i is CartItem => i !== null);
      return sanitized;
    } catch (err) {
      // If storage is corrupt or JSON fails, start with an empty cart.
      // In production you may want to report this to your telemetry backend.
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'uid'>) => {
    const safeItem = sanitizeStoredItem({ ...item, uid: generateUid() });
    if (!safeItem) return;

    setItems((current) => {
      const idx = current.findIndex(
        (x) => x.id === safeItem.id && x.size === safeItem.size && x.color === safeItem.color && x.course === safeItem.course
      );
      if (idx > -1) {
        const copy = [...current];
        const existing = copy[idx];
        const newQty = Math.min(MAX_QTY, existing.qty + safeItem.qty);
        copy[idx] = { ...existing, qty: newQty };
        return copy;
      }
      return [...current, safeItem];
    });
  };

  const removeItem = (uid: string) => setItems((s) => s.filter((i) => i.uid !== uid));

  const updateQty = (uid: string, qty: number) => {
    const safeQty = Math.max(1, Math.min(MAX_QTY, Math.floor(Number(qty) || 0)));
    setItems((s) => s.map((i) => (i.uid === uid ? { ...i, qty: safeQty } : i)));
  };

  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export default CartProvider;
