import React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const TopHeader = ({ value, themeHandler }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h5>First Dev</h5>
      <div className={value === "dark" ? "dark" : ""}>
        <select
          value={value}
          onChange={themeHandler}
          className="form-select form-select-sm"
          aria-label="Default select example"
        >
          <option value="Light">Light☀️</option>
          <option value="dark">Dark🌙</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
