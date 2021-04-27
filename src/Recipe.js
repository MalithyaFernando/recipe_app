import React from 'react';
import style from './recipe.module.css';

function Recipe ({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""></img>
            <p>Calories: {calories}</p>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;