import React from "react";
import "./Card.css";
const Card = ({taskObj,index}) => {
  return (
      <div className="card-wrapper">
        <div className="card-top" style={{"background-color": "green"}}></div>
        <div className="task-holder">
          <span className="card-header"  style={{"background-color":"#F2FAF1","border-radius":"10px"}}>
            {taskObj.Name}
          </span>
          <p>{taskObj.Description}</p>
          <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
            <i
              class="far fa-edit mr-3"
              style={{"color": "#F2FAF1"}}
            ></i>
            <i
              class="fas fa-trash-alt"
              style={{"color": "#5dc4ff"}}
            ></i>
          </div>
        </div>
      </div>
  );
};

export default Card;
