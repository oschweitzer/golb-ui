const { default: styled } = require('styled-components');

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 20%;
  margin: 1%;
  border: 1px solid #eeeeee;
  box-shadow: 2px 2px 2px #cccccc;
  padding: 1%;
  border-radius: 5px;

  &:hover {
    box-shadow: 2px 2px 2px #8d99ae;
    cursor: pointer;
  }
`;

export default Card;
