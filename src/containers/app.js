import React, {PropTypes as P} from 'react';
import {connect} from 'react-redux';
import {identity} from 'ramda';
import {getRegions} from '../actions/regionActions';
import {getDungeons} from '../actions/dungeonActions';
import {getOpenDungeons} from '../actions/openDungeonActions';

const App = React.createClass({

  componentDidMount: function() {
    this.props.dispatch(getRegions());
    this.props.dispatch(getDungeons());
    this.props.dispatch(getOpenDungeons());
  },

  render: function() {
    return <div>
      <h1>Hello world</h1>
    </div>;
  },

  propTypes: {
    dispatch: P.func.isRequired
  }
});

const select = identity;

export default connect(select)(App);
