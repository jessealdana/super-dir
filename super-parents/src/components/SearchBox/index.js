import React from "react";
import "./style.css";


function SearchBox(props) {
  return (
    <div className="container text-center">
      <p id="searcher">Use the input box to search this directory by keyword:</p>
      <p>1: Enter a class color to return a list of all parents with a child in that classroom</p>
      <p>2: Enter a child's name to return a list of all parents or guardians of the child</p>
      <p>3: Enter a parent's name to search for an individual</p>
        <form className="form-inline" id="search">
          <input onChange={props.handleInput} type="text"/>
        </form>
    </div>
  );
}
export default SearchBox;