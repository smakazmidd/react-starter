import {observable, action, computed} from 'mobx';
import Contact from '../models/Contact';
import 'whatwg-fetch';
import Client from 'socket.io-client';

export class ContactsStore {

  client;
  @observable contacts = [];

  @computed get reverseContacts(){
    return this.contacts.reverse();
  }

  @action createContact({id, firstName, lastName}) {
    let contact = new Contact({id, firstName, lastName});
    this.contacts.push(contact);
  }

  addContact(firstName, lastName) {
    fetch('api/contact', {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        firstName,
        lastName
      })
    });
  }

  @action fillStore(data) {
    this.contacts.replace(data.map((c) => {
      return new Contact(c);
    }));
  }

  refreshStore() {
    fetch('/api/contacts')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.fillStore(json);
      });
  }

  constructor() {
    this.refreshStore();

    let client = new Client('/');
    client.on('connect', () => {
      //connected to socket.io
    });

    client.on('contactAdded', (contact) => {
      this.createContact(contact);
    });
  }
}

export default new ContactsStore();
