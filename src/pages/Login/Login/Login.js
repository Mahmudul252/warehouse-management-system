import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialLogin/SocialLogin';
import PageTitle from '../../shared/PageTitle/PageTitle';

const Login = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [resetClicked, setResetClicked] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const from = location?.state?.from?.pathname || '/';
    const handleUserLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        setEmail(email);
        signInWithEmailAndPassword(email, password);
        setResetClicked(false);
    }
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Password reset email sent');
        setResetClicked(true);
    }


    return (
        <div className='mx-auto mt-5 login-form'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='mb-3 display-6'>Please Login</h2>
            <Form onSubmit={handleUserLogin}>

                <FloatingLabel controlId="email" label="Email" className="mb-3">
                    <Form.Control name="email" type="text" placeholder="Enter Email" required />
                </FloatingLabel>

                <FloatingLabel controlId="password" label="Password" className="mb-3">
                    <Form.Control name="password" type="password" placeholder="Enter Password" required />
                </FloatingLabel>

                {loading && <p className="text-danger">Loading...</p>}
                {error && <div>
                    <p className="text-danger">{error.message}</p>
                    <p style={{ display: resetClicked ? 'none' : 'block' }} className=''>Forget Password? <span className='text-primary cursor-pointer' onClick={handleResetPassword}>Reset Now</span></p>
                </div>}
                {resetClicked && <p>Password resetting email sent to your email.</p>}

                <Button className='login-button d-block mx-auto' variant="secondary" type="submit">
                    Login
                </Button>

                <p className='my-3'>Don't have an account? <Link className='ms-2 text-decoration-none' to='/signup'>Sign Up now</Link></p>
            </Form>
            <SocialSignIn from={from}></SocialSignIn>
        </div>
    );
};

export default Login;