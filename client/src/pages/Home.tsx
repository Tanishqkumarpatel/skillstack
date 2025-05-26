import Navbar from "../components/Navbar"
import Courses from "../components/Courses"

function Home() {
    return(
        <div>
            <Navbar />
            <div className="p-4">
                <h1 className="text-2xl font-semibold">This is Home Page</h1>
            </div>
            <Courses />
        </div>
    );
}

export default Home