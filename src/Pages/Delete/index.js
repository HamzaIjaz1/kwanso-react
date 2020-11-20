import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { getData, setData } from "../../Components/LocalStorage";

const ListTask = (props) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let data = getData();

    setItems(data);
  };

  const checked = (checked, id) => {
    if (checked) {
      selected.push(id);
      setSelected([...selected]);
    } else {
      var filtered = selected.filter(function (value, index, arr) {
        return value != id;
      });
      setSelected([...filtered]);
    }
  };

  const deleteSelected = () => {

    let toSave = [];

    items.forEach((d) => {
      if (!selected.includes(d.id)) {
        toSave.push(d);
      }
    });

    setData(toSave);
    fetchData();
  };

  return (
    <div className="container text-center">
      {items &&
        items.map((d) => (
          <Card
            show={true}
            name={d.name}
            id={d.id}
            key={d.id}
            handleChecked={checked}
          />
        ))}

      <button
        className="btn btn-danger"
        disabled={selected.length > 0 ? false : true}
        onClick={deleteSelected}
      >
        Delete Selected
      </button>
    </div>
  );
};

export default ListTask;
