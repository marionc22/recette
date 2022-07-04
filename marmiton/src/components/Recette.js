import React from "react";
import { useParams } from "react-router-dom";

const Recette = (props) => {
  const params = useParams();
  console.log(params)
  return (
    <>
      {props.data.map((recette) => {
        console.log(recette.id);
        console.log(params.id);
        return (
          <div className="recettel">
            {recette.title == params.title ? (
              <>
                <img
                  className="illustration"
                  src={recette.thumbnail}
                  alt="illustration"
                />
                <h2>{recette.title}</h2> <p>{recette.author}</p>
                <p>{recette.difficulty}</p>
                <p>{recette.description}</p>
                <p> Ingrédients
                  {recette.ingredients.map((ingredient) => {
                    return <><p>{ingredient.quantity} {ingredient.unit} {ingredient.name}</p></>;
                  })}
                </p>
                <p> Instructions {recette.instructions.map((instru) =>{
                    return <><p>{instru}</p></>
                })}</p>
              </>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Recette;
