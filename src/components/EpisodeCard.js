import React from "react";

export default function EpisodeCard(props) {
  console.log(props);
  return (
    <div className="location-card">
      <h3>Type: {props.episode.name}</h3>
    </div>
  );
}
