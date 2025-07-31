import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    const userData = {email, password};
    try {
      if (!email.trim() || !password.trim()) {
        alert("Fields cannot be empty.");
        return;
      }
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Logging In: " + data.message);
        navigate("/Browse");
      } else {
        alert("Logging Failed: " + (data.error || data.message));
      }
    } catch (error) {
      console.error('Network Error: ', error);
    }
  };

  // const handleForgotPassword = () => {
  //   console.log("Redirecting to forgot password...");
  // };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <Link
          // onClick={handleForgotPassword}
          to="/Forgot"
          className="h-8 w-full border-2 border-black bg-red-400 hover:bg-red-800 rounded text-white text-center"
        >
          Forgot?
        </Link>
        <Link
          // onClick={handleSignUp}
          to="/Signup"
          className="h-8 w-full border-2 border-black bg-pink-400 hover:bg-pink-800 rounded text-white text-center"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
