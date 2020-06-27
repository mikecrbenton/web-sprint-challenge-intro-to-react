import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header.js';
import List from './list';
import './App.css';
import styled from 'styled-components';

function App() {

   const [characters, setCharacters] = useState();
   const [link, setLink] = useState(1);

   function nextSet() {

      if( link < 10) {
         setLink( link + 1 );
      }
   }
   function previousSet() {
      if( link > 0){
         setLink( link - 1 );
      }
   }


   useEffect( () => {
      axios.get(`https://swapi.dev/api/people/?page=${link}`)
         .then( (response) => {  
               //console.log('RESPONSE ', response.data)    
               setCharacters(response.data.results)       
         })
         .catch( e => console.log("ERROR = ", e));

      // ADD CLICK TO THE SUBMIT BUTTON - GET USER INPUT
      document.getElementById('next-search').addEventListener("click", nextSet);
   
      // REMOVE THE EVENT LISTENER
      return () => {
         document.getElementById('next-search').removeEventListener("click", nextSet);
      };

   }, [link]);

   useEffect( () => {
      axios.get(`https://swapi.dev/api/people/?page=${link}`)
         .then( (response) => {  
               //console.log('RESPONSE ', response.data)    
               setCharacters(response.data.results)       
         })
         .catch( e => console.log("ERROR = ", e));

       // ADD CLICK TO THE SUBMIT BUTTON - GET USER INPUT
       document.getElementById('previous-search').addEventListener("click", previousSet);
   
       // REMOVE THE EVENT LISTENER
       return () => {
          document.getElementById('previous-search').removeEventListener("click", previousSet);
       };

   }, [link]);


   console.log('CHARACTERS IN APP' ,characters);

   return (
      <div className="App">
         <Header />
         <div>
            <List starwarschars={characters}/>
         </div>
      </div>
   );


}

const ButtonDiv = styled.div`
   margin-top: 20px;
`;

export default App;