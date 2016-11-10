import {observable, action} from 'mobx'

export default class Todo {
  id;
  @observable title;
  @observable done;

  @action toggleDone() {
    this.done = !this.done;
  }

  constructor({title, done}) {
    this.id = Date.now();
    this.title = title;
    this.done = done;
    console.log(done);
  }
}
