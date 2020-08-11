import React from "react";
import SearchIcon from "../searchIcon.svg";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            id=""
            // value=""
            // onChange=""
            className="form-input form-control fa fa-search"
            placeholder="City"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
