import Navbar from "../components/Navbar"
import Courses from "../components/Courses"
import Header from "../components/Header"

function Home() {
    return(
        <div>
            <Navbar />
            <Header />
            <div className="p-4">
                <h1 className="text-2xl font-semibold">This is Home Page</h1>
            </div>
            <Courses />
        </div>
    );
}

export default Home