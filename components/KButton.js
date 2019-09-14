import React from 'react';

export default class KButton extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
