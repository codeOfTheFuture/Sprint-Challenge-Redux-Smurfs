import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div>
      <h1>Smurf List</h1>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
};

export default SmurfList;
