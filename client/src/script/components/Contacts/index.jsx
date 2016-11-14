import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import store from '../../stores/ContactsStore';
import {Button, Glyphicon} from 'react-bootstrap';
import ContactList from './ContactList';
import AddContact from './AddContact';

@observer
export default class Contacts extends React.Component {

  @observable addingNewContact;

  constructor() {
    super();
    this.addingNewContact = false;
  }

  onSave(firstName, lastName) {
    store.addContact(firstName, lastName);
    this.onClose();
  }

  onClose() {
    this.addingNewContact = false;
  }

  addContact() {
    this.addingNewContact = true;
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <Button bsStyle="primary" onClick={() => this.addContact()}>
          <Glyphicon glyph="plus"/>
          &nbsp;Add Contact
        </Button>

        <ContactList data={store.reverseContacts}/>

        <AddContact show={this.addingNewContact}
          onSave={(firstName, lastName) => this.onSave(firstName, lastName)}
          onClose={() => this.onClose()}/>
      </div>
    );
  }
}
