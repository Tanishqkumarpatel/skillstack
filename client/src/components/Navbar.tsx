import Home from "../pages/Home";

function Navbar() {
    return(
        <nav className="w-full px-6 py-3 bg-gray-800 text-white shadow-md flex justify-between items-center">

            <div className="space-x-4">
                <a href="#" onClick={Home} className="hover:text-blue-400">Home</a>
                <a href="#" className="hover:text-blue-400">Courses</a>
            </div>

            <a href="#" className="hover:text-blue-400">Login</a>

        </nav>
    );
}

export default Navbar