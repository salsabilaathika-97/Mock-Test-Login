import react, {useState} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { handleLogin } from "../../redux/actions/authAction";

const Login = () => {
    const [username, setUsername] = useState("");
    const [errMsg, setErrMsg] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username,
        };
        console.log(payload);
        dispatch(handleLogin(payload, setErrMsg, navigate));
    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md = {8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase">Welcome</h2>
                                    <p className="mb-5">Please enter your username</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Username
                                                </Form.Label>
                                                <Form.Control placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                Login
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;