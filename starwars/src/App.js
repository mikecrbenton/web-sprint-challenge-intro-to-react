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

   // CAN ONLY ONE EVENT LISTENER BE IN A USEFFECT - I NEEDED TO CREATE THIS
   // SECOND INSTANCE FOR MY BUTTONS TO WORK
   useEffect( () => {
      axios.get(`https://swapi.dev/api/people/?page=${link}`)
         .then( (response) => {      
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

   return (
      <div className="App">
         <Header />
         <div>
            <List starwarschars={characters}/>
         </div>
      </div>
   );
}

// STYLES=======================================
const ButtonDiv = styled.div`
   margin-top: 20px;
`;
// STYLES=======================================


export default App;