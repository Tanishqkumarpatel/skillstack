import Header from "../components/Header"

function Home() {
    return(
        <div>
            <Header />
            <div className="p-4">
                <h1 className="text-2xl font-semibold">This is Home Page</h1>
            </div>
        </div>
    );
}

export default Home