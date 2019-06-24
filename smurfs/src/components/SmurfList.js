import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div className="d-flex flex-row flex-wrap">
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
};

export default SmurfList;
