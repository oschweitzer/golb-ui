import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.7em;
  border: 1px solid #eeeeee;
  box-shadow: 2px 2px 2px #cccccc;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  margin-top: 5%;

  &:hover {
    box-shadow: 2px 2px 2px #8d99ae;
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : 'transparent'};
    cursor: pointer;
    border: 1px solid transparent;
    color: white;
  }
`;
