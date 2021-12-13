import React from "react";

function Button({ click }) {
  return (
    <button type="button" onClick={click}>
      Fetch!
    </button>
  );
}

export default Button;

