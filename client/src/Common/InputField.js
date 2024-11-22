import React from 'react';

const InputField = ({ label, type, placeholder, error }) => (
  <div className="relative">
    <div className="group relative rounded-lg border border-gray-300 dark:border-gray-700 focus-within:border-purple-500 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-purple-500/20">
      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-0 text-gray-900 dark:text-white sm:leading-7"
      />
    </div>
    {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
  </div>
);

export default InputField;