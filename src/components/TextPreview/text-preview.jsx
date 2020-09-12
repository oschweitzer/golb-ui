const { default: styled } = require('styled-components');

const TextPreview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 20;
  overflow: hidden;
  text-align: justify;
`;

export default TextPreview;
