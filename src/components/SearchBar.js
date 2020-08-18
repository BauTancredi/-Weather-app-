import React from "react";

const SearchBar = ({ search, setSearch, setCallApi }) => {
  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCallApi(true);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            id=""
            value={search.city}
            onChange={(e) => handleChange(e)}
            className="form-input form-control fa fa-search"
            placeholder="City"
            name="city"
          />
        </div>
        <div className="form-group d-flex justify-content-center">
          <input
            type="submit"
            value="Search"
            className="btn btn-light btn-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
