import React from 'react';
import Card from './card';
import styled from 'styled-components';

function List ( { starwarschars}) {

   //console.log("IN LIST: ", starwarschars ? starwarschars[0]['name'] : "waiting");

   return (
      <CardContainer>
         { starwarschars ?
            starwarschars.map( (person, index) => <Card key={index} starcard={person}/> ) :
            <span>LOADING...</span>
         }
      </CardContainer>
   )
}

export default List;

const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: space-around;

   @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
   }
`;