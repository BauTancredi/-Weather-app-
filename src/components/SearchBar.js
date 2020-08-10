import React from "react";
import SearchIcon from "../searchIcon.svg";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center form-container">
      <form onSubmit="">
        <div class="form-group">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            id=""
            // value=""
            // onChange=""
            className="form-input form-control fa fa-search"
            placeholder="City"
          />
        </div>
        {/* <img src={SearchIcon} alt="" /> */}
      </form>
    </div>
  );
};

export default SearchBar;
