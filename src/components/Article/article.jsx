import React, { memo } from 'react';
import { Card } from '../styled-components/card/card';
import { TextPreview } from '../styled-components/text/text';
import PropTypes from 'prop-types';

const Article = (props) => {
  return (
    <Card>
      <section>
        <header>
          <h3>{props.title}</h3>
        </header>
        <article>
          <TextPreview>{props.content}</TextPreview>
        </article>
        <hr />
        <footer>
          <p>
            Article written by &nbsp;
            <a href={`mailto:${props.author.email}`}>{props.author.name}</a>
          </p>
        </footer>
      </section>
    </Card>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default memo(Article);
