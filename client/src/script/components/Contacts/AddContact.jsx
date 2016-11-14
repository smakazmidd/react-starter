import React from 'react';
import {observer} from 'mobx-react'
import {Modal, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class AddContact extends React.Component {

  onSave() {
    var firstName = ReactDOM.findDOMNode(this.refs.txtFirstName).value;
    var lastName = ReactDOM.findDOMNode(this.refs.txtLastName).value;
    this.props.onSave(firstName, lastName);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="txtFirstName">
            <ControlLabel>First Name</ControlLabel>
            <FormControl ref="txtFirstName" type="text" value={this.props.firstName}/>
          </FormGroup>
          <FormGroup controlId="txtLastName">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl ref="txtLastName" type="text" value={this.props.lastName}/>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" onClick={() => this.onSave()}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default AddContact;
