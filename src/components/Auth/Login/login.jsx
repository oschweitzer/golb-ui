import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Mutations from '../../../graphql/mutations';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/auth.actions';

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

  return (
    <div>
      <form>
        <label>
          Email
          <input type={'email'} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password
          <input
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type={'button'} onClick={onLoginButtonClick}>
          Login
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email) => dispatch(login(email)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
