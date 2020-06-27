import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';


function Card( {starcard}){

   //console.log("CARD-->", starcard ? starcard : "loading")

   //FILMS IS AN ARRAY OF URLS - NEED TO SET STATE TO MAP OVER DATA
   const [films, setFilms] = useState();

   
   useEffect( ()=>{
      axios.all( starcard.films.map( (film) => axios.get(film) ) )
      .then(axios.spread( function(...response) {
         console.log(response)
         setFilms(response);
      }))
      .catch( (error) => console.log(error))
   },[starcard])  

   //console.log( 'AXIOS ALL IS :', films ? films : "");
   //console.log("FILMS DATA:  ",films ? films[0]['data']['title'] : "")


   return (
      <CharacterCard>
         <Name>{starcard ? <p>{starcard.name}</p> : <span></span>}</Name>
         <LineBreak></LineBreak>
         <CharText>
            <Bold>Born: </Bold>
            {starcard ? <span>{starcard.birth_year}</span> : <span></span>}
         </CharText>
         <CharText>
            <Bold>Gender: </Bold>
            {starcard ? <span>{starcard.gender}</span> : <span></span>}</CharText>
         <CharText>
            <Bold>Appeared In: </Bold>
               { films ? 
                  films.map( i => <Films>{ i.data.title}</Films> ) :
                  <span>LOADING...</span>
                }     
          </CharText>     
      </CharacterCard>
   ) 

}

export default Card;

const CharacterCard = styled.div`
   box-shadow: 3px 3px 10px black;
   border-radius: 5px;
   margin: 5px;
   background: rgba(255, 232, 31, 0.6);
   padding: 5px;
   width: 18%;
`;
const Name = styled.h3`
   font-size: 1.5rem;
   font-family: "STARWARS";
   text-shadow: 1px 1px 2px #FFe81F;
`;
const CharText = styled.div`
   margin: .5em 0;
`;
const Bold = styled.span`
   font-weight: 700;
   font-size: 1.1rem;
`;
const Films = styled.p`
   margin: .5em 0;
`;
const LineBreak = styled.hr`
height: 2px;
background-color: black;
border: none;
`;