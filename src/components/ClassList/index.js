import React from "react";
import "./style.css";
import ParentCard from "../ParentCard";



function ClassList(props) {
  let parents = props.filteredClass.map((parent, i) => {
    return<ParentCard 
    key={i}
    id={parent.id}                     
    image={parent.image}
    name={parent.name}  
    spouse={parent.spouse}
    child={parent.child}
    classroom={parent.classroom}
    addy={parent.addy}
    city={parent.city}
    zip={parent.zip}
    phone={parent.phone}
    email={parent.email} 
    />
  })

return(

  <div className="container">
    <div className="row">
      {parents}
    </div>
  </div>
)


}
export default ClassList