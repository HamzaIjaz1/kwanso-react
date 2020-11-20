import React from "react";

const Card = (props) => {
  return (
    <div className="card m-4">
      <div className="d-flex justify-content-around align-items-center">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <div>
          {props.show && (
            <label className="container">
              <input
                type="checkbox"
                onChange={(event) => {
                  console.log(event.target)
                  props.handleChecked(event.target.checked ? true:false,props.id);
                }}
                key={props.id}
              />
              <span className="checkmark"></span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
