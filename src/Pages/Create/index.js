import React, { useState } from "react";
import { getData, setData } from "../../Components/LocalStorage";
import { withRouter } from "react-router-dom";

const CreateTask = (props) => {
  const [name, setName] = useState();

  const create = () => {
    const data = [...getData()];

    data.push({ id: Math.random(), name: name });
    setData(data);
    props.history.push("/list-task");
  };

  return (
    <div className="mt-5">
      <div className="form-group p-5 ml-5 mr-5">
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Enter Name"
          className="form-control mt-5"
        />
      </div>

      <button
        className="bt btn-primary"
        onClick={create}
        disabled={name ? false : true}
      >
        Submit
      </button>
    </div>
  );
};

export default withRouter(CreateTask);
