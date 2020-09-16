import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  NavBarContainer,
  SubTitle,
} from '../styled-components/container/container';
import * as styles from './navbar.module.css';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink strict to={'/'} className={styles['main-title']}>
        <h1>
          Golb
          <SubTitle> - A blog story...</SubTitle>
        </h1>
      </NavLink>
      <NavLink strict to={'/login'} className={styles['login-link']}>
        Login
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
