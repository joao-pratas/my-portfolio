import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape(
        {
          url: PropTypes.string,
          name: PropTypes.string.isRequired
        }
      )
    )
  };

  render() {
    const { items } = this.props;
    console.log(this.props);
    return (
      <ul>
        {items.map((item, index) => <li key={index}><a href={item.url}>{item.name}</a></li>)}
      </ul>
    );
  }
}
