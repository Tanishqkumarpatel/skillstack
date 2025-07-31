import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSignUp = async () => {
        const userData = { username, email, password};
        try {
            const response = await fetch(
                "http://localhost:5000/auth/register", 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Registration Success: " + data.message);
                // You can reset form, show success message, redirect, etc.
                navigate("/Login");
            } else {
               alert("Registration failed: " + (data.error || data.message));
            }
            
        } catch (error) {
            console.error('Network Error :', error)
        }
    };

    return(
        <div className="flex flex-col space-y-4 p-4 max-w-sm mx-auto">
            <div className="flex flex-col">
                <label htmlFor="UserName" className="mb-1 font-medium">
                    UserName
                </label>

                <input 
                    type="text"
                    id="UserName"
                    className="border-2 rounded border-rose-500 px-2 py-1"
                    placeholder="Enter a UserName eg: John"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

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
                    onClick={handleSignUp}
                    className="h-8 w-24 border-2 border-black bg-green-400 hover:bg-green-800 rounded text-white"
                >
                    SignUp
                </button>
            </div>
        </div>
    )
}

export default Signup