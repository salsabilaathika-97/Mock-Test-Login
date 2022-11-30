import react from "react";
import Navigation from "../../components/Navigation/Navigation";
import ToDo from "../../components/ToDo/ToDo";
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="mx-8 mt-4 text-center">
                <Button variant="primary">Create a new to-do list</Button>
            </div>
            <div className="m-8">
                <ToDo />
            </div>
        </div>
    )
}

export default Home;