import React from 'react';
import Card from './card';

function List ( { starwarschars}) {

   //console.log("IN LIST: ", starwarschars ? starwarschars[0]['name'] : "waiting");

   return (
      <div>
         <Card />
      </div>
   )
}

export default List;