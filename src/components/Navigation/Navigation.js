import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    Welcome.
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Login as: <a href="#">User</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;