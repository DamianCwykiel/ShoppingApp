import React from 'react';

const Action = (props) => (
  <div>
        <button 
        className="big-button" 
        onClick = {props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I buy at first ?
        </button>
      </div>
);

export default Action;