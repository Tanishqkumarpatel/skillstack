import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSignUp = () => {
        console.log("Signing up ...");
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