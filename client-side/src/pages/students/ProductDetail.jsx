import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormButton from '../../components/forms/FormButton';

// Reusable ButtonGroup component
const ButtonGroup = ({ items, selectedItem, onSelect, label }) => (
  <div className="mb-2 flex-1">
    

    <span className="block text-xs md:text-base font-medium text-gray-700">{label}</span>
    <div className="flex flex-wrap gap-2 mt-1">
      {items.length > 0 ? (
        items.map((item) => (
          <button
            key={item}
            className={`text-sm md:text-md border rounded-full px-3 py-1 md:px-4 md:py-2 focus:outline-none ${
              selectedItem === item ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))
      ) : (
        <span className="text-gray-500">No {label}</span>
      )}
    </div>
  </div>
);

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state || {}; // Default to empty object if state is undefined
  const navigate = useNavigate();

  const {
    imageUrl = [], 
    name = '', 
    description = '', 
    price = 0, 
    stocks = 0, 
    selectedSizes = [], 
    selectedVariations = [],
    control = '',
    category = '',
  } = product;

  const sizes = selectedSizes.length > 0 ? selectedSizes[0].split(",") : [];
  const variations = selectedVariations.length > 0 ? selectedVariations[0].split(",") : [];

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [preview, setPreview] = useState(imageUrl[0] || '');

  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleBack = () => {
    navigate("/student/merchandise")

  }

  if (!product.name) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>; // Handle the case when product data is not available
  }

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto bg-white rounded-md shadow-sm space-y-4">
      <button className="absolute flex items-center gap-2 px-4 py-2 border rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={handleBack}>
        <i className="fa fa-arrow-left"></i> {/* Font Awesome arrow-left icon */}
      </button>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image and gallery */}
        <div className="flex flex-col md:flex-row md:w-1/2 gap-4">
          {/* Preview Image */}
          <div className="flex-1 flex justify-center items-center border rounded-lg overflow-hidden">
            {preview ? (
              <img 
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-500">No image selected</p>
            )}
          </div>
          
          {/* Image Gallery */}
          <div className="flex flex-row md:flex-col gap-2 mt-2">
            {imageUrl.map((img, index) => (
              <img 
                src={img}
                key={index}
                alt={`${img}-${index}`}
                className="cursor-pointer w-14 h-14 sm:w-20 md:h-20 object-cover rounded-lg border transition-transform duration-200 hover:scale-105"
                onClick={() => setPreview(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col p-2">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{name}</h3>
          <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
          <p className="text-md md:text-lg font-semibold text-gray-700 mb-2">₱ {price.toFixed(2)}</p>
          <p className="text-sm md:text-md mb-2 text-gray-500">In stock: {stocks}</p>

          {(name.includes("Uniform") || name.includes("Tshit")) && (
            <div className="flex flex-wrap gap-4 mb-4">
              <ButtonGroup
                items={sizes}
                selectedItem={selectedSize}
                onSelect={setSelectedSize}
                label="Sizes"
              />
              <ButtonGroup
                items={variations}
                selectedItem={selectedColor}
                onSelect={setSelectedColor}
                label="Color"
              />
            </div>
          )}

          <div className="mb-4 flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-700">Quantity:</span>
            <button
              className="border rounded-full px-4 py-2 mr-2 bg-gray-100 text-gray-700"
              onClick={decreaseQuantity}
              disabled={control === "Limited Purchase"}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="border rounded-full px-4 py-2 ml-2 bg-gray-100 text-gray-700"
              onClick={increaseQuantity}
              disabled={control === "Limited Purchase"}
            >
              +
            </button>
            {control === "Limited Purchase" && (
              <div className="ml-4 text-red-500 text-sm font-medium">Limited Purchase</div>
            )}
          </div>

          <FormButton 
            type="button"
            text="Buy Now"
            icon={<i className="fa fa-credit-card"></i>}
            styles="mt-auto bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-4 text-sm transition duration-150 flex items-center gap-2"
            textClass="inline"
          />
        </div>
      </div>

      {/* Product Specification */}
      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-lg font-semibold mb-2 text-gray-800">Product Specification</h4>
        <p className="text-gray-700 mb-1"><strong>Category:</strong> {category}</p>
        <p><strong>Description</strong> {description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
