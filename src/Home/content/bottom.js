import React from "react";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const bottom = () => {
  const style = {
    width: 80,
    display: "inline-block",
    marginRight: 20,
    marginLeft: 20,
  };
  return (
    <div>
      <div>
        <h3>How do I compare to my peers?</h3>
        <p>These members represent the current goal achivement</p>
        <div style={style}>
        <Progress.Circle gapDegree={60} percent={40} />
      </div>
      <div style={style}>
        <Progress.Circle
          gapDegree={160}
          gapPosition="right"
          strokeLinecap="square"
          percent={80}
          strokeColor="yellow"
          showInfo={true}
        />
      </div>
        
      <div style={style}>
        <Progress.Circle percent={20} gapDegree={60}  />
      </div>
    </div>
      </div>
  );
};

export default bottom;
