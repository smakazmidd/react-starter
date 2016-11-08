import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/style.css'
import reactLogo from '../images/react.png'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src={reactLogo} alt="React"/>
        <h1>React starter app!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector('#app-root'))
