import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const WorkoutEdit = props => {

  const [ editDesc, setEditDesc ] = useState(props.workoutToUpdate.description);
  const [ editDef, setEditDef ] = useState(props.workoutToUpdate.definition);
  const [ editRes, setEditRes ] = useState(props.workoutToUpdate.result);

  const triggerEditDescInputChange = (event) => setEditDesc(event.target.value);
  const triggerEditDefInputChange = (event) => setEditDef(event.target.value);
  const triggerEditResInputChange = (event) => setEditRes(event.target.value);

  const workoutUpdate = (event, workout) => {
    event.preventDefault();
    fetch(`http://localhost:9150/log/${props.workoutToUpdate.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
      body: JSON.stringify({log: { description: editDesc, definition: editDef, result: editRes }})
    })
    .then(response => {
      props.fetchWorkouts();
      props.updateOff();
    })
  };

  return(
    <Modal isOpen={true}>
      <ModalHeader>Log a Workout</ModalHeader>
      <ModalBody>
        <Form onSubmit={workoutUpdate}>
          <FormGroup>
            <Label for="result" >Edit Result:</Label>
            <Input name="result" id="result" value={editRes} onChange={triggerEditResInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description" >Edit Description:</Label>
            <Input name="description" id="description" value={editDesc} onChange={triggerEditDescInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="definition" >Edit Definition:</Label>
            <Input type="select" name="definition" id="definition" value={editDef} onChange={triggerEditDefInputChange} >
              <option></option>
              <option value="Time">Time</option>
              <option value="Weight">Weight</option>
              <option value="Distance">Distance</option>
            </Input>
          </FormGroup>
          <Button type="submit">Update the workout!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default WorkoutEdit;