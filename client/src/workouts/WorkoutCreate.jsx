import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const WorkoutCreate = props => {
  const [ description, setDescription ] = useState('');
  const [ definition, setDefinition ] = useState('');
  const [ result, setResult ] = useState('');

  const triggerDescriptionInputChange = event => setDescription(event.target.value);
  const triggerDefinitionInputChange = event => setDefinition(event.target.value);
  const triggerResultInputChange = event => setResult(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9150/log', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
      body: JSON.stringify({ log: { description, definition, result } })
    })
    .then(response => response.json())
    .then(logData => {
      console.table(logData);
      setDescription('');
      setDefinition('');
      setResult('');
      props.fetchWorkouts();
    })
  }

  return(
    <>
    <h3>Log a Workout</h3>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="description" >Description</Label>
        <Input type="text" name="description" id="description" value={description} onChange={triggerDescriptionInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="definition" >Definition</Label>
        <Input type="select" name="definition" id="definition" value={definition} onChange={triggerDefinitionInputChange} >
          <option value="Time">Time</option>
          <option value="Weight">Weight</option>
          <option value="Distance">Distance</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="result" >Result</Label>
        <Input type="text" name="result" id="result" value={result} onChange={triggerResultInputChange} />
      </FormGroup>
      <Button type="submit">Click to Submit</Button>
    </Form>
    </>
  );
};

export default WorkoutCreate;