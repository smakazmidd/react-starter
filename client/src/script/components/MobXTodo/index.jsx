import * as React from 'react';
import {observer} from 'mobx-react';
import store from '../../stores/TodoStore';
import classNames from 'classnames';

@observer
export default class MobXTodo extends React.Component {
  render() {

    window.TS = store;

    let todoList = store.showingOnlyIncompleteTodos ? store.incompleteTodos : store.todos;

    let todos = todoList.map((t) => {
      return (
        <li key={t.id} onClick={() => t.toggleDone()} className={classNames({'todo-done': t.done})}>
          {t.title}
        </li>
      );
    });

    return (
      <div>
        <h2>MobX Todo Sample</h2>
        <ul>
          {todos}
        </ul>
        <label htmlFor="chkFiltered">Show Only Incomplete</label>
        <input id="chkFiltered" type="checkbox" onChange={() => store.toggleOnlyIncompleteTodos()} checked={store.showingOnlyIncompleteTodos}/>
      </div>
    );
  }
}
