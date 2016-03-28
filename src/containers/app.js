import React, {PropTypes as P} from 'react';
import {connect} from 'react-redux';
import {identity} from 'ramda';
import {getRegions} from '../actions/regionActions';

const App = React.createClass({

  handleOnClick: function() {
    this.props.dispatch(getRegions());
  },

  render: function() {
    return <div>
      <h1>Hello world</h1>
      <button onClick={this.handleOnClick}>get regions</button>
    </div>;
  },

  propTypes: {
    dispatch: P.func.isRequired
  }
});

const select = identity;

export default connect(select)(App);
