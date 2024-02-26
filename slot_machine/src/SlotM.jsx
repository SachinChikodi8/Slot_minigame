import React from "react";

const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1 className="emoji">
            {x} {y} {z}
          </h1>
          <h1 className="success message">You Got A Match</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1 className="message">Match Failed</h1>
        </div>
      </>
    );
  }
};

export default SlotM;