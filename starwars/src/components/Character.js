import React from 'react';
// import axios from 'axios';

// birth_year: "19BBY"
// eye_color: "blue"
// gender: "male"
// hair_color: "blond"
// height: "172"
// mass: "77"
// name: "Luke Skywalker"

function Character(props) {
    return (
        <div>
            {console.log(props, 'here')}
            <h3>{props.char.name}</h3>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Height: {props.char.height}</p>
            <p>Mass: {props.char.mass}</p>
        </div>
    )
}

export default Character
