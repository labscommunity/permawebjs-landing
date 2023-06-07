import styled from "styled-components"

const Title = styled.h2`
  font-size: 2.5rem;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
  font-weight: 600;
  line-height: 1.2em;

  @media screen and (max-width: 720px) {
    font-size: 2.25rem;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  jutify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default Title;
