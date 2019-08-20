import React from "react";

export default function CharacterCard(props) {
  // console.log(props);
  return (
    <div className="char-card">
      <img src={props.character.image} />
      <p>
        <span>Name:</span> {props.character.name}
      </p>
      <p>
        <span>Location:</span> {props.character.origin.name}
      </p>
      <p>
        <span>Species:</span> {props.character.species}
      </p>
      <p>
        <span>Status:</span> {props.character.status}
      </p>
    </div>
  );
}
