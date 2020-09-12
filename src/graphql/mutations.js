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

const Mutations = {
  CREATE_ARTICLE,
};

export default Mutations;
