import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

   const [characters, setCharacters] = useState();


   useEffect( () => {
      axios.get('https://swapi.dev/api/people/')
         .then( (response) => {      
               setCharacters(response.data.results)       
         })
         .catch( e => console.log("ERROR = ", e));
   }, []);

   console.log('CHARACTERS IN APP' ,characters);

   return (
      <div>

      </div>
   );


}

export default App;
