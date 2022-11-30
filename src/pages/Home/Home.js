import react from "react";
import Navigation from "../../components/Navigation/Navigation";
import ToDo from "../../components/ToDo/ToDo";

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="m-8">
                <ToDo />
            </div>
        </div>
    )
}

export default Home;