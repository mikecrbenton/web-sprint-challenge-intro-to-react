import React from 'react';
import styled  from 'styled-components'

function Header() {

   return (
      <HeaderDiv>
        <HeaderText>STAR WARS</HeaderText>
      </HeaderDiv>
   );
}

export default Header;

const HeaderDiv = styled.div`
   padding: 20px 0 10px;
`;

const HeaderText = styled.h1`
   font-family: "STARWARS";
   font-size: 4rem;
   text-shadow: -1px 1px 3px  #FFe81F;
   margin:0
`;