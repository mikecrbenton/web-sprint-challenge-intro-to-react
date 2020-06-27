import React from 'react';
import styled  from 'styled-components'

function Header() {

   return (
      <div>
        <HeaderText>STAR WARS</HeaderText>
      </div>
   );
}

export default Header;

const HeaderText = styled.h1`
   font-family: "STARWARS";
   font-size: 4rem;
   text-shadow: -1px 1px 3px  #FFe81F;
   margin:0
`;