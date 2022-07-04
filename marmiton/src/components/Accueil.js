import React from "react";

const Accueil = (props) => {
  return (
    <div className="accueil">
      {props.data.map((recette) => {
        return <div className="vignette" key={recette.id}>
        <img className="illustration" src={recette.thumbnail} alt="illustration" />
        <h2>{recette.title}</h2> <p>{recette.author}</p><p>{recette.difficulty}</p><p>{recette.description}</p>
        </div>
      })}
    </div>
  );
};

export default Accueil;
