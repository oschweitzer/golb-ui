const { gql } = require('@apollo/client');

const CREATE_ARTICLE = gql`
  mutation($title: String!, $content: String!, $author: UserInput!) {
    postArticle(title: $title, content: $content, author: $author) {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`;

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const SIGN_UP = gql`
  mutation($name: String!, $password: String!, $email: String!) {
    signup(name: $name, password: $password, email: $email) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const Mutations = {
  CREATE_ARTICLE,
  LOGIN,
  SIGN_UP,
};

export default Mutations;
