import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
    return (
        <>
            <div className='form-header'>
                <h3>Register</h3>
            </div>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                    />
                </Form.Group>

                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
}
