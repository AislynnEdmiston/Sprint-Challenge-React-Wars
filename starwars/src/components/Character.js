import React from 'react';
import styled from 'styled-components';


const CharProfile = styled.div`
    background-color: black;
    width: 56%;
    margin: 0 auto;
    display: flex;
    border: 2px dashed red;
`;

const CharName = styled.h3`
    color: white;
    font-size: 25px;
    padding: 20px;
`;

const CharDetails = styled.p`
    color: white;
    padding: 20px;
`;

function Character(props) {
    return (
        <CharProfile>
            <CharName>{props.char.name}</CharName>
            <CharDetails>Birth Year: {props.char.birth_year}</CharDetails>
            <CharDetails>Gender: {props.char.gender}</CharDetails>
            <CharDetails>Eye Color: {props.char.eye_color}</CharDetails>
            <CharDetails>Hair Color: {props.char.hair_color}</CharDetails>
            <CharDetails>Height: {props.char.height}</CharDetails>
            <CharDetails>Mass: {props.char.mass}</CharDetails>
        </CharProfile>
    )
}

export default Character
