import React, { Component } from 'react';
import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log('Component Did Mount: ', this.props.getSmurfs());
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <AddSmurfForm />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('MSTP: ', state.smurfs);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
