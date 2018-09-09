import React from "react";

const Results = props => {
  return (
    <div className='results'>
      {props.displayResult(0)}
      {props.displayResult(1)}
      {props.displayResult(2)}
      {props.displayResult(3)}
      {props.displayResult(4)}
      {props.displayResult(5)}
      {props.displayResult(6)}
      {props.displayResult(7)}
      {props.displayResult(8)}
      {props.displayResult(9)}
    </div>
  );
};

export default Results;
