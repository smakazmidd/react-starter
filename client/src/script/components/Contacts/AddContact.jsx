import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

@observer
class AddContact extends React.Component {
  @observable firstName;
  @observable lastName;

  onSave() {
    this.props.onSave(this.firstName, this.lastName);
  }

  handleFirstNameChange(e) {
    this.firstName = e.target.value;
  }

  handleLastNameChange(e) {
    this.lastName = e.target.value;
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
            <FormControl ref="txtFirstName" type="text" value={this.props.firstName} onChange={(e) => this.handleFirstNameChange(e)}/>
          </FormGroup>
          <FormGroup controlId="txtLastName">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl ref="txtLastName" type="text" value={this.props.lastName}  onChange={(e) => this.handleLastNameChange(e)}/>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" onClick={() => this.onSave()}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

AddContact.propTypes = {
  onSave: React.PropTypes.func,
  onClose: React.PropTypes.func,
  show: React.PropTypes.bool,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string
};

export default AddContact;
