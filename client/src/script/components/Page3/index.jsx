import * as React from 'react';

export default class Page3 extends React.Component {
  render() {
    return (
      <h2>I am page 3 with argument: {this.props.params.param}</h2>
    );
  }
}

Page3.propTypes = {
  params: React.PropTypes.object
};
