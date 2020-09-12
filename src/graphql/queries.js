const { gql } = require('@apollo/client');

const ARTICLES = gql`
  query(
    $filter: String
    $skip: Int
    $take: Int
    $orderBy: ArticleOrderByInput
  ) {
    articles(filter: $filter, skip: $skip, take: $take, orderBy: $orderBy) {
      articles {
        id
        title
        content
        author {
          id
          name
          email
        }
      }
      count
    }
  }
`;

const Queries = {
  ARTICLES,
};

export default Queries;
