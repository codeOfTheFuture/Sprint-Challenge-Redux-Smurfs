import React, { Component } from 'react';
import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log('Component Did Mount: ', this.props.getSmurfs());
  }

  render() {
    return (
      <Container className="App d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-primary">SMURFS! 2.0 W/ Redux</h1>
        <div className="text-dark">
          Welcome to your Redux version of Smurfs!
        </div>
        <AddSmurfForm />
        <SmurfList smurfs={this.props.smurfs} />
      </Container>
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
