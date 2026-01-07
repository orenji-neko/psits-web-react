import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export type ToastType = "success" | "error" | "info" | "warning" | "default";

const notyf: Notyf = new Notyf({
  duration: 2000,
  position: { x: "left", y: "top" },
});

export const showToast = (type: ToastType, message: string): void => {
  if (type === "success") {
    notyf.success(message);
    return;
  }
  notyf.error(message);
};
