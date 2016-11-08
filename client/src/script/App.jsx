import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return (
      <h1>React starter app!</h1>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector('#app-root'))
