import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../services/authService";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) =>
        setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await register(email, password, confirmPassword);

            console.log("Registration successful:", userData);

            navigate("/login");
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    };

    return (
        <>
            <div className='form-header'>
                <h3>Register</h3>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </Form.Group>

                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
}
