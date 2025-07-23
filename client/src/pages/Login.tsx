import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    console.log("Logging in...");
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to forgot password...");
  };

  const handleSignUp = () => {
    console.log("Redirecting to sign up...");
  };

  return (
    <div className="flex flex-col space-y-4 p-4 max-w-sm mx-auto">
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-2 border-rose-500 px-2 py-1 rounded"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col gap-1 relative">
        <label htmlFor="password" className="mb-1 font-medium">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="border-2 border-rose-500 p-2 rounded pr-8"
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-1 top-11 text-gray-600 hover:text-black"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleLogin}
          className="h-8 w-24 border-2 border-black bg-green-400 hover:bg-green-800 rounded text-white"
        >
          Login
        </button>
      </div>

      <div className="flex justify-between space-x-4">
        <button
          onClick={handleForgotPassword}
          className="h-8 w-full border-2 border-black bg-red-400 hover:bg-red-800 rounded text-white"
        >
          Forgot?
        </button>
        <button
          onClick={handleSignUp}
          className="h-8 w-full border-2 border-black bg-pink-400 hover:bg-pink-800 rounded text-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
