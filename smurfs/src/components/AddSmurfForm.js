import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

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
      <Form
        onSubmit={this.addSmurf}
        className="d-flex flex-column justify-content-start my-3"
      >
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <FormControl
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onInputChanges}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Age</Form.Label>
          <FormControl
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.onInputChanges}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Height</Form.Label>
          <FormControl
            type="text"
            placeholder="Height"
            name="height"
            value={this.state.height}
            onChange={this.onInputChanges}
          />
        </FormGroup>
        <Button type="submit" variant="outline-primary">
          Add Smurf
        </Button>
      </Form>
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
