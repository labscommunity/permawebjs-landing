import styled from "styled-components";

const Button = styled.a<{ secondary?: boolean; }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  padding: .65rem 1rem;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, .15);
  color: rgb(${props => !props.secondary ? props.theme.primaryText : props.theme.accent});
  background-color: rgb(${props => !props.secondary ? props.theme.accent : "255, 255, 255"});
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all .23s ease-in-out;

  &:hover {
    transform: translate3d(0px, -1.4px, 0px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.385em;
    width: 1em;
    height: 1em;
  }
`;

export default Button;
