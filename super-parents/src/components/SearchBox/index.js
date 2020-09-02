import React from "react";
import "./style.css";

function SearchBox(props) {
  return <div className="SearchBox">{props.children}  
  </div>;
}

export default SearchBox;