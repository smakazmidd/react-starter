import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/style.css'
import reactLogo from '../images/react.png'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import Page3 from './Page3/Page3'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src={reactLogo} alt="React"/>
        <h1>React starter app!</h1>
        <Link to="/">Page 1</Link>
        &nbsp;
        <Link to="/page2">Page 2</Link>
        &nbsp;
        <Link to="/page3/Hello%20World">Page 3</Link>
        <section className="page">
          {this.props.children}
        </section>

      </div>
    );
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Page1}></IndexRoute>
      <Route path="/page2" component={Page2}></Route>
      <Route path="/page3/:param" component={Page3}></Route>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app-root'))
