import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  NavBarContainer,
  SubTitle,
} from '../styled-components/container/container';

const NavBar = () => {
  return (
    <NavBarContainer>
      <h1>
        Golb
        <SubTitle> - A blog story...</SubTitle>
      </h1>
      <nav></nav>

      <NavLink strict to={'/login'}>
        <span>Login</span>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
