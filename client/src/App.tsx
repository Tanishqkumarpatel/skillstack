import Navbar from "./components/Navbar"
import Courses from "./components/Courses"

import './index.css'
import Header from "./components/Header"

function App() {
	return(
		<div>
      		<Navbar />
			<Header />
			<Courses />
    	</div>
	);
}

export default App