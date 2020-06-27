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

      setLink( link + 1 );
   }
   function previousSet() {

      setLink( link - 1 );
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