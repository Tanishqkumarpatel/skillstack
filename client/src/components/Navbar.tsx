import Home from "../pages/Home";

function Navbar() {
    return(
        <nav className="w-full px-4 py-3 bg-gray-800 text-white shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">SkillStack</h1>
            <div className="space-x-4">
                <a href="#" onClick={Home} className="hover:text-blue-400">Home</a>
                <a href="#" className="hover:text-blue-400">Courses</a>
                <a href="#" className="hover:text-blue-400">Login</a>
            </div>
        </nav>
    );
}

export default Navbar