import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import List from '../common/List';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const listItems = [{
      name: "Contact",
      url: "#"
    },{
      name: 'Home',
      url: '/home'
    },{
      name: 'About',
      url: '/about'
    },{
      name: 'Portfolio',
      url: '/portfolio'
    }]
    return (
      <div className="home-default-page">
         <div id="main-menu">
          <div id="logo"></div>
          <div className="menu-items">
            <List items={listItems} />
          </div>
         </div>
         <div id="home"></div>
         <div id="about"></div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
