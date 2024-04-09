import React, { useContext, useState } from "react";
import { MdFormatListNumbered } from "react-icons/md";
import Heading from "./Heading";
import ListOfCategory from "./ListOfCategory";
import { CatsContext } from "./hooks/CatsContext";

const Categories = () => {
  const { addCats, changeHandler, newCats } = useContext(CatsContext);
  return (
    <div className="mt-5">
      <Heading title={"Categories"} icon={<MdFormatListNumbered size={30} />} />

      <div className="d-flex gap-3 mt-4">
        <input
          style={{ maxWidth: "600px" }}
          value={newCats}
          onChange={changeHandler}
          className="form-control form-control-sm"
          type="text"
          placeholder="Please enter your category"
        />
        <button className="btn btn-dark" onClick={addCats}>
          Add
        </button>
      </div>

      <ListOfCategory />
    </div>
  );
};

export default Categories;
