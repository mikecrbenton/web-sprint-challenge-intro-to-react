import React from 'react';
import Card from './card';

function List ( { starwarschars}) {

   //console.log("IN LIST: ", starwarschars ? starwarschars[0]['name'] : "waiting");

   return (
      <div>
         { starwarschars ?
            starwarschars.map( (person, index) => <Card key={index} starcard={person}/> ) :
            <span>LOADING...</span>
         }
      </div>
   )
}

export default List;