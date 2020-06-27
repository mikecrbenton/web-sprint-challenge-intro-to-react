import React from 'react';
import axios from "axios";
import styled from 'styled-components';

function Card( {starcard}){

   //console.log("CARD-->", starcard ? starcard : "loading")

   return (
      <CharacterCard>
         <div>{starcard ? <p>{starcard.name}</p> : <span></span>}</div>
         <div>{starcard ? <p>{starcard.birth_year}</p> : <span></span>}</div>
         {starcard ? <p>{starcard.gender}</p> : <span></span>}     
      </CharacterCard>
   ) 

}

export default Card;

const CharacterCard = styled.div`
   border: 1px solid gray;
`;