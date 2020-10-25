import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Signup = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const triggerEmailInputChange = event => setEmail(event.target.value);
  const triggerPasswordInputChange = event => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(email && password) {
      fetch('http://localhost:9150/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      .then(response => response.json())
      .then(data => {
        let token = data.sessionToken;
        props.updateToken(token);
        console.log("From the signup component:");
        console.table([ token ]);
      })
    } else {
      alert("Enter an email AND password")
    }
  }


  return(
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="emailSignup">Email</Label>
          <Input type="text" name="email" id="emailSignup" value={email} onChange={triggerEmailInputChange} placeholder="example@email.com"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="passwordSignup">Password</Label>
          <Input type="password" name="password" id="passwordSignup" value={password} onChange={triggerPasswordInputChange} placeholder="enter password"></Input>
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};

export default Signup;