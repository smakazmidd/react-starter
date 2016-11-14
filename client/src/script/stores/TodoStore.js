import {observable, action, computed} from 'mobx';
import Todo from '../models/Todo';

export class TodoStore {

  @observable todos = [];
  @observable showingOnlyIncompleteTodos;

  @action createTodo({title, done}) {
    this.todos.push(new Todo({title, done}));
  }

  @action toggleOnlyIncompleteTodos() {
    this.showingOnlyIncompleteTodos = !this.showingOnlyIncompleteTodos;
  }

  @computed get incompleteTodos() {
    return this.todos.filter((todo) => !todo.done);
  }

  constructor() {
    this.showingOnlyIncompleteTodos = false;
    this.createTodo({title: 'Sample Todo 1', done: true});
    this.createTodo({title: 'Sample Todo 2', done: false});
  }
}

export default new TodoStore();
