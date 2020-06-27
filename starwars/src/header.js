import React from 'react';
import styled  from 'styled-components'


function Header() {

   return (
      <HeaderDiv>       
        <ButtonDiv>
            <button id="previous-search">PREVIOUS</button>
         </ButtonDiv>
        <HeaderText>STAR WARS</HeaderText>
        <ButtonDiv>
            <button id="next-search">NEXT</button>
         </ButtonDiv>
      </HeaderDiv>
   );
}


// STYLES=======================================
const HeaderDiv = styled.div`
   padding: 20px 0 10px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const HeaderText = styled.h1`
   font-family: "STARWARS";
   font-size: 4rem;
   text-shadow: -1px 1px 3px  #FFe81F;
   margin: 0 1em;
`;

const ButtonDiv = styled.div`
   margin-top: 20px;

   button{
      padding: .5em 1em;
      background: rgba(255, 232, 31, 0.6);
      border: 0px solid black;
      border-radius: 5px;
      font-size: 1.2rem;
      box-shadow: 0px 0px 5px black;
      font-weight: bold;
   }
`;
// STYLES=======================================

export default Header;