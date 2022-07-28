import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login () {
var [errors, setErrors] = useState(null);
var [emailError, setEmailError] = useState(null);
var email = useRef("");
var password = useRef("");
var navigate = useNavigate();


var handleValidation = (e) => {
    var eError = false;
    var pError = false;

    e.preventDefault();
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/

    if (email.current.value.length > 0 && email.current.value === "ram@gmail.com") {
        eError = true;
        setEmailError(false)
    } 
    else {
        setEmailError(true);
    }

    if (password.current.value.match(Regex)){
        pError = true;
        setErrors(false)
    }
    else {
        setErrors(true);
    }

    if (eError && pError) {
        navigate("/Products");
    }
}

    return (
        <Form className='m-4' onSubmit={handleValidation}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={email} placeholder="Enter email" />   
            </Form.Group>
            {emailError && <p className='emailError'>Invalid User</p>}  
            <Form.Group className="mb-3 mt-2" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} placeholder="Password" />
            </Form.Group>
            {errors && <p className='passwordError'>Password must contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>}<br/>
            <Button variant="primary" className='mt-3' type="submit">
                Login
            </Button>
        </Form>
    );
}