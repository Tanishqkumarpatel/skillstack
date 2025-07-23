import './index.css';
import Browse from "./pages/Browse";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
	return(
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path = "/Browse" element={<Browse />} />
				<Route path = "/Login" element={<Login />} /> 
			</Routes>
		</Router>	
	);
}

export default App