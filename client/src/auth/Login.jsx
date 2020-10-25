import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Login = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const triggerEmailInputChange = event => setEmail(event.target.value);
  const triggerPasswordInputChange = event => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(email && password) {
      fetch('http://localhost:9150/user/login', {
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
      })
    } else {
      alert("Enter an email AND password")
    }
  }

  return(
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="emailLogin">Email</Label>
          <Input type="text" name="email" id="emailLogin" value={email} onChange={triggerEmailInputChange} placeholder="example@email.com"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="passwordLogin">Password</Label>
          <Input type="password" name="password" id="passwordLogin" value={password} onChange={triggerPasswordInputChange} placeholder="enter password"></Input>
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;