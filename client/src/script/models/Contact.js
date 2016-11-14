import {observable} from 'mobx'
class Contact {

  id;
  @observable firstName;
  @observable lastName;

  constructor({id, firstName, lastName}) {
    this.id = id || Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export default Contact;
