import React from "react";

export default function LocationCard(props) {
  // console.log(location);
  return (
    <div className="location-card">
      <h3>Type: {props.location.type}</h3>
      <p>Name: {props.location.name}</p>
      <p>Dimension: {props.location.dimension}</p>
      <span>Episodes: {props.location.residents.length}</span>
    </div>
  );
}

// {
//   name,
//   type,
//   dimension,
//   residents
// }
