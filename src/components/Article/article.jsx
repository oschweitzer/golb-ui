import React from 'react';
import { Card } from '../styled-components/card/card';
import { TextPreview } from '../styled-components/text/text';

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

export default Article;
