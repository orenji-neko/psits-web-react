import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FormInput = ({ label, type, id, name, value, onChange, styles, error, parentStyle, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <motion.div className={`${parentStyle} relative flex-1`}>
      {error && (
        <p className="absolute text-xs text-red-600 -top-5 right-0">
          {error}
        </p>
      )}

      <motion.label
        htmlFor={id}
        className={`absolute left-2 top-2 transition-transform duration-300 ${isFocused || value ? 'bg-white px-1' : ''} ${error ? 'text-red-600' : 'text-gray-700'}`}
        animate={{
          scale: isFocused || value ? 0.74 : 1,
          y: isFocused || value ? -20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={`w-full border ${error ? 'border-red-600' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${styles}`}
        aria-invalid={!!error}
        aria-describedby={`${id}-error`}
      />
    </motion.div>
  );
};

export default FormInput;
