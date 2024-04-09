import React, { useContext } from "react";
import { ListContext } from "./hooks/ListContext";

const ListOfList = () => {
  const { list } = useContext(ListContext);
  return (
    <div className="d-flex gap-3 flex-wrap align-items-center mt-4">
      {list.map((items, index) => (
        <div key={index} className="border px-2 rounded-3">
          {items}
        </div>
      ))}
    </div>
  );
};

export default ListOfList;
