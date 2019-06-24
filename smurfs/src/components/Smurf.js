import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

import { Card, Button } from 'react-bootstrap';

const Smurf = props => {
  const deleteSmurf = () => {
    props.deleteSmurf(props.smurf.id);
  };

  return (
    <Card className="d-flex flex-column justify-content-center align-items-center border border-primary rounded mx-2 p-4">
      <Card.Title className="border-bottom border-primary py-2 my-2">
        {props.smurf.name}
      </Card.Title>
      <Card.Body>
        <Card.Text>Age: {props.smurf.age}</Card.Text>
        <Card.Text>Height: {props.smurf.height}</Card.Text>
      </Card.Body>
      <Button size="sm" variant="danger" onClick={() => deleteSmurf()}>
        Delete
      </Button>
    </Card>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);
