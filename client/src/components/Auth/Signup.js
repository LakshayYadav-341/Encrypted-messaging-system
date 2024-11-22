import React from 'react';
import AuthLayout from './AuthLayout';
import InputField from '../../Common/InputField';
import Button from '../../Common/Button';

const Signup = () => {
  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Enter your details to get started"
    >
      <form className="p-6 pt-0 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First name"
            type="text"
            placeholder="John"
          />
          <InputField
            label="Last name"
            type="text"
            placeholder="Doe"
          />
        </div>
        
        <InputField
          label="Email address"
          type="email"
          placeholder="name@example.com"
        />
        
        <InputField
          label="Password"
          type="password"
          placeholder="Create a password"
        />
        
        <InputField
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
        />

        <div className="flex items-start space-x-2 pt-2">
          <input
            type="checkbox"
            className="mt-1 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
          />
          <label className="text-sm text-gray-400">
            I agree to the{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
          </label>
        </div>

        <Button type="submit">Create account</Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="secondary">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </div>
          </Button>
          <Button variant="secondary">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              Facebook
            </div>
          </Button>
        </div>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
            Sign in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;