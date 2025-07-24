import './index.css';
import Browse from "./pages/Browse";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';

function App() {
	return(
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path = "/Browse" element={<Browse />} />
				<Route path = "/Login" element={<Login />} /> 
				<Route path="/Signup" element={<Signup />} />
				<Route path="/Forgot" element={<Forgot />} />
			</Routes>
		</Router>	
	);
}

export default App