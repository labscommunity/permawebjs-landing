import styled from "styled-components"

const Title = styled.h2`
  font-size: 2.5rem;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
  font-weight: 600;
  line-height: 1.2em;
`;

export default Title;
