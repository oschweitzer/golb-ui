import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Queries from '../../graphql/queries';
import Article from '../Article/article';
import ArticleCreationForm from '../Article/article-creation';
import CardsContainer from '../CardsContainer/cards-container';

const Home = () => {
  const [displayArticleCreationForm, setDisplayArticleCreationForm] = useState(
    false
  );

  const { loading, error, data } = useQuery(Queries.ARTICLES, {
    variables: {
      take: 8,
      orderBy: {
        createdAt: 'desc',
      },
    },
  });
  let articles = null;
  if (data) {
    articles = data.articles.articles.map((article) => (
      <Article
        key={article.id}
        title={article.title}
        content={article.content}
        author={article.author}
      />
    ));
  }

  if (loading) {
    articles = <div>Loading...</div>;
  }

  if (error) {
    articles = <div>Error</div>;
  }

  const onWriteNewArticleButtonClick = () => {
    setDisplayArticleCreationForm(true);
  };

  return (
    <div>
      <div>
        <button onClick={onWriteNewArticleButtonClick}>
          Write new article
        </button>
        {displayArticleCreationForm ? <ArticleCreationForm /> : null}
      </div>
      <h2>Recent articles</h2>
      <CardsContainer>{articles}</CardsContainer>
    </div>
  );
};

export default Home;
