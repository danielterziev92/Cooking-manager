import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginUser(e);
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Button variant='dark' type='submit'>
                Submit
            </Button>
        </Form>
    );
}
