import React from "react";
import "./style.css"

function ParentCard(props) {
    return (
                <div className="card col-md-4">
                    <div className="card-body">
                        <h2> {props.name} </h2>
                        <div className="img-container">
                            <img  alt={props.name} src={props.image} />
                        </div>
                        <div className="text-area">
                            <p>Child(ren): {props.child} </p>
                            <p>Classroom: {props.classroom} </p>
                            <p>Partner: {props.spouse} </p>
                            <p>Address: {props.addy},  {props.city}  {props.zip} </p>
                            <p>Phone: {props.phone} </p>
                            <p>Email: {props.email} </p>
                        </div>
                    </div>
                </div>
    )
}
export default ParentCard