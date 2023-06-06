import styled from "styled-components";

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgb(${props => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  font-weight: 450;

  @media screen and (max-width: 720px) {
    font-size: 1.05rem;
  }
`;

export default Subtitle;
