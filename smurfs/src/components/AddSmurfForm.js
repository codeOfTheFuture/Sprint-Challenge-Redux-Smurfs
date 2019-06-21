import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class AddSmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  onInputChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    return (
      <form onSubmit={this.addSmurf}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onInputChanges}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.onInputChanges}
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="text"
            placeholder="Height"
            name="height"
            value={this.state.height}
            onChange={this.onInputChanges}
          />
        </div>
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurfForm);
