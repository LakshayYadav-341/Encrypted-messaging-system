import React from 'react';
import ThemeToggle from '../../Theme/ThemeToggle';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black text-gray-900 dark:text-white min-h-screen flex flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2 mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span>Secure Authentication</span>
      </div>
      
      <div className="w-full max-w-md px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="p-6">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;