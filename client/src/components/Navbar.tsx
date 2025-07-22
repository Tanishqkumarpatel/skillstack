import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="w-full px-6 py-3 bg-gray-800 text-white shadow-md flex justify-between items-center">

            <div className="space-x-4">
                <Link to="/" className="hover:text-blue-400">Home</Link>
                <Link to="/Browse" className="hover:text-blue-400">Browse</Link>
            </div>

            <Link to="/Login" className="hover:text-blue-400">Login</Link>

        </nav>
    );
}

export default Navbar