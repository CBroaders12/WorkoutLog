import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
  // Col
} from 'reactstrap';

const NavigationBar = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar color='faded' light expand="md">
      <NavbarBrand href="/">Workout Log</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavigationBar;