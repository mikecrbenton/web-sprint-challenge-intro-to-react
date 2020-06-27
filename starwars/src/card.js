import React from 'react';
import axios from "axios";
import styled from 'styled-components';

function Card( {starcard}){

   //console.log("CARD-->", starcard ? starcard : "loading")

   return (
      <CharacterCard>
         <Name>{starcard ? <p>{starcard.name}</p> : <span></span>}</Name>
         <CharText>{starcard ? <p>{starcard.birth_year}</p> : <span></span>}</CharText>
         <CharText>{starcard ? <p>{starcard.gender}</p> : <span></span>}</CharText>     
      </CharacterCard>
   ) 

}

export default Card;

const CharacterCard = styled.div`
   box-shadow: 3px 3px 10px black;
   border-radius: 5px;
   margin: 5px;
   background: rgba(255, 232, 31, 0.5);
   padding: 5px;
   width: 15%;
`;
const Name = styled.h3`
   font-size: 1.3rem;
   
`;
const CharText = styled.div`
   
`;