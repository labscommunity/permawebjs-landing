import styled from "styled-components";

export const Glow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  user-select: none;
  width: 100%;
  padding-top: 10.5%;
  background-color: rgba(${props => props.theme.accent}, .5);
  filter: blur(120px);
  z-index: -5;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 720px) {
    filter: blur(70px);
  }
`;

export const Glow2 = styled(Glow)`
  width: 60%;
  background: rgba(255, 191, 255, .3);
  mix-blend-mode: hard-light;
  filter: blur(100px);
  z-index: -4;

  @media screen and (max-width: 720px) {
    filter: blur(50px);
  }
`;

export const Glow3 = styled(Glow)`
  width: 40%;
  background: #ea9eea;
  filter: blur(80px);
  z-index: -3;

  @media screen and (max-width: 720px) {
    filter: blur(30px);
  }
`;