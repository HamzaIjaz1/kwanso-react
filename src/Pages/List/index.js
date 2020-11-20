import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { getData } from "../../Components/LocalStorage";

const ListTask = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = getData();

    setItems(data);
  }, []);
  return (
    <div className="container text-center">
      {items && items.map((d) => <Card name={d.name} id={d.id} key={d.id} />)}
    </div>
  );
};

export default ListTask;
