import React from "react";
import "./style.css";

function Header(props) {

  function refreshPage() {
    window.location.reload(false);
  }


  return <div className="header">{props.children} 
        <h1>SuperSchool Parent Directory</h1> 
        <button onClick={refreshPage}>Refresh All Parents</button>
  </div>;
}

export default Header;