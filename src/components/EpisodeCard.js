import React from "react";

export default function EpisodeCard(props) {
  console.log(props);
  return (
    <div className="location-card">
      <h3>Name: {props.episode.name}</h3>
      <h4>Episode: {props.episode.episode}</h4>
      <h4>Air Date: {props.episode.air_date}</h4>
    </div>
  );
}
