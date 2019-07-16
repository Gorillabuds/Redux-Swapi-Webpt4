import React from "react";

const Character = props => {
  return <li>{props.character.name} 
              <p>{props.character.homeworld}</p>
              <p>{props.character.birth_year}</p>
              <p>{props.character.species}</p>
        </li>;
};

export default Character;
