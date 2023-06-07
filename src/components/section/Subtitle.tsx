import styled from "styled-components";

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgb(${props => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  font-weight: 450;
  max-width: 40vw;

  @media screen and (max-width: 1000px) {
    max-width: 65vw;
  }

  @media screen and (max-width: 720px) {
    font-size: 1.05rem;
    max-width: unset;
  }
`;

export default Subtitle;
