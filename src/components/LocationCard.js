import React from "react";

export default function LocationCard(props) {
  // console.log(location);
  return (
    <div className="location-card">
      {props.location.name}
      {props.location.type}
      {props.location.dimension}
      {/* {props.location.residents} */}
    </div>
  );
}

// {
//   name,
//   type,
//   dimension,
//   residents
// }
