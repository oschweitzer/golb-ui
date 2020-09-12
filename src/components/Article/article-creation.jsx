import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

import Mutations from '../../graphql/mutations';

const ArticleCreationForm = () => {
  const [createArticle, { loading, error }] = useMutation(
    Mutations.CREATE_ARTICLE
  );

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onCancelButtonClick = () => {};

  const onValidateButtonClick = () => {
    createArticle({
      variables: {
        title,
        content,
        author: {
          email: 'j.doe@email.com',
        },
      },
    });
  };

  return (
    <div>
      <form>
        <label>
          Title
          <input type={'text'} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Content
          <input
            type={'textarea'}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type={'button'} onClick={onCancelButtonClick}>
          Cancel
        </button>
        <button type={'button'} onClick={onValidateButtonClick}>
          Validate
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </div>
  );
};

export default ArticleCreationForm;
