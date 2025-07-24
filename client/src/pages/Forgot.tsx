import { useState } from "react";

function Forgot() {
    
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log("Sending you OTP at", email, "to reset password");
    }

    return(
        <div className="flex flex-col space-y-4 p-4 max-w-sm mx-auto">
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-rose-500 px-2 py-1 rounded"
                    placeholder="Enter your email"
                />
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="h-8 w-24 border-2 border-black bg-green-400 hover:bg-green-800 rounded text-white"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}


export default Forgot