import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Mutations from '../../../graphql/mutations';
import { login } from '../../../store/actions/auth.actions';
import { StyledButton } from '../../styled-components/button/button';
import { AuthContainer } from '../../styled-components/container/container';
import { StyledInput } from '../../styled-components/input/input';
import { AuthForm, FormElement } from '../../styled-components/form/form';
import PropTypes from 'prop-types';

const Login = (props) => {
  const [login, { loading, error }] = useMutation(Mutations.LOGIN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginButtonClick = () => {
    login({
      variables: {
        email,
        password,
      },
    });
    props.login(email);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <AuthContainer>
      <AuthForm>
        <FormElement>
          <label>
            Email
            <StyledInput type={'email'} onChange={onEmailChangeHandler} />
          </label>
        </FormElement>
        <FormElement>
          <label>
            Password
            <StyledInput type={'password'} onChange={onPasswordChangeHandler} />
          </label>
        </FormElement>

        <StyledButton
          type={'button'}
          onClick={onLoginButtonClick}
          bgColor={'#55a630'}
        >
          Login
        </StyledButton>
      </AuthForm>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </AuthContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email) => dispatch(login(email)),
  };
};

Login.propTypes = {
  login: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
