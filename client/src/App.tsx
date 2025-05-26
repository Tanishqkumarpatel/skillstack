import Navbar from "./components/Navbar"
import Courses from "./components/Courses"

import './index.css'

function App() {
	return(
		<div>
      		<Navbar />
      		<div className="p-4">
        		<h2 className="text-2xl font-semibold">Welcome to SkillStack</h2>
      		</div>
			<Courses />
    	</div>
	);
}

export default App