import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from 'react-router'
import { storeData } from '../../customLocalStorage'
import swal from "sweetalert"
import TYPES from "../../redux/types"

const Navigation = () => {
    const {userData} = useSelector((state)=> state);
    const navigate = useNavigate();

    const handleLogout = () => {
        swal({
            title: "Logout",
            text: "Logout Berhasil",
            icon: "success",
            timer: 3000,
        }).then(() => {
            navigate("/");
        });
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Welcome, {userData.name}.
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant='warning' onClick={handleLogout}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;