import React from 'react';
import AuthLayout from './AuthLayout';
import InputField from '../../Common/InputField';
import Button from '../../Common/Button';

const Login = () => {
  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Enter your credentials to access your account"
    >
      <form className="p-6 pt-0 space-y-4">
        <InputField
          label="Email address"
          type="email"
          placeholder="name@example.com"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
            />
            <span className="text-sm text-gray-400">Remember me</span>
          </label>
        </div>

        <Button type="submit">Sign in</Button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="font-medium text-purple-400 hover:text-purple-300">
            Sign up
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;