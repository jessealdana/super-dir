import React from "react";
import "./style.css";


function SearchBox(props) {
  return (
    <div className="container">
      <form className="form-inline" id="search">
        <p id="searcher">Search by Child's Name or by Classroom Color
        <br />
        <input onChange={props.handleInput} type="text"/>
        </p>
      </form>
    </div>
  );
}
export default SearchBox;