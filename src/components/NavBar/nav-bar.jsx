import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  const MainContainer = styled.div`
    display: flex;
    background-color: #2b2d42;
    color: #ef233c;
    padding-left: 1%;
    text-shadow: 1px 1px 2px #ef233c;
  `;

  const SubTitle = styled.span`
    font-size: 0.7em;
    text-shadow: none;
    font-style: italic;
  `;

  return (
    <MainContainer>
      <h1>
        Golb
        <SubTitle> - A blog story...</SubTitle>
      </h1>
      <nav></nav>
    </MainContainer>
  );
};

export default NavBar;
