import React from "react";

const Button = (props) => {
  return (
    <button className="btn bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;