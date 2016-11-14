import {observable, action, computed} from 'mobx'
import Contact from '../models/Contact'
import 'whatwg-fetch';
import Client from 'socket.io-client';

export class ContactsStore {

  client;
  @observable contacts = [];

  @computed get reverseContacts(){
    return this.contacts.reverse();
  };

  @action createContact({id, firstName, lastName}) {
    let contact = new Contact({id, firstName, lastName});
    console.log(contact);
    this.contacts.push(contact);
  }

  addContact(firstName, lastName) {
    var contactJson = JSON.stringify({
      firstName,
      lastName
    });
    console.log(contactJson);
    fetch('api/contact', {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        firstName,
        lastName
      })
    }).then((res) => {
      //this.refreshStore();
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
      console.log('I am connected');
    })

    client.on('contactAdded', (contact) => {
      this.createContact(contact);
      console.log('contact added', contact);
    });

    client.on('welcome', (data) => console.log(data));
  }
}

export default new ContactsStore();
