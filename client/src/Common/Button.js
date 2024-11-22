import React from 'react';

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:opacity-50";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500",
    secondary: "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-gray-500",
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;