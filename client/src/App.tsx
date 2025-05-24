import Navbar from "./components/Navbar"
import Photo from './assets/Photo.jpg'
import Card from "./components/Card"

import './index.css'

function App() {
	return(
		<div>
      		<Navbar />
      {/* You can add routing or other components here */}
      		<div className="p-4">
        		<h2 className="text-2xl font-semibold">Welcome to SkillStack</h2>
      		</div>
			<Card title="Myself Me and I" image={Photo} />
    	</div>
	);
}

export default App