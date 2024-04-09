import React, { useContext } from "react";
import { CatsContext } from "./hooks/CatsContext";

const ListOfCategory = () => {
  const { cats } = useContext(CatsContext);
  return (
    <div className="d-flex gap-3 flex-wrap align-items-center mt-4">
      {cats.map((items, index) => (
        <div key={index} className="border px-2 rounded-3">
          {items}
        </div>
      ))}
    </div>
  );
};

export default ListOfCategory;
