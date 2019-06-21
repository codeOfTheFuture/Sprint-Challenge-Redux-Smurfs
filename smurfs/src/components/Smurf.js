import React from 'react';

function Smurf(props) {
  return (
    <ul>
      <li>{props.smurf.name}</li>
      <li>{props.smurf.age}</li>
      <li>{props.smurf.height}</li>
    </ul>
  );
}

export default Smurf;
