import react from "react";
import Navigation from "../../components/Navigation/Navigation";
import ToDo from "../../components/ToDo/ToDo";
import ModalCreate from "../../components/ModalCreate/ModalCreate";

const Home = () => {
    return (
        <div>
            <Navigation />
            <ModalCreate />
            <div className="m-8">
                <ToDo />
            </div>
        </div>
    )
}

export default Home;