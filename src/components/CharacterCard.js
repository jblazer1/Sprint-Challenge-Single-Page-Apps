import React from "react";

export default function CharacterCard(props) {
  // console.log(props);
  return (
    <div className="char-card">
      {/* <span>todo: character</span> */}
      {/* {props.character.map(info => (
        <img src={info.url} />
      ))} */}
      <img src={props.character.image} />
      {props.character.name}
    </div>
  );
}
