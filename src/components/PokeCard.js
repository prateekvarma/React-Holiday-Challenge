import React from "react";

function PokeCard(props) {
  return (
    <div>
      <h1>Pokemon Name : {props.my_pokemondata.name}</h1>
      <img
        src={props.my_pokemondata.sprites.front_default}
        alt="front_default"
      />
      <img src={props.my_pokemondata.sprites.front_shiny} alt="front_shiny" />
      <a href={props.my_pokemondata.video}>Link to video</a>
    </div>
  );
}

export default PokeCard;
