import styled from "styled-components";
import Command from "../Command";
import Button from "../Button";
import Nav from "../Nav";

export default function Hero() {
  return (
    <Wrapper>
      <Nav />
      <Content>
        <Title>
          One-stop library for<br/>builders on Arweave
        </Title>
        <Subtitle>
          Leverage the power of the Arweave ecosystem<br/>to build quickly and simply on the permaweb. 
        </Subtitle>
        <GetStarted>
          <Button>
            Get Started
          </Button>
          <Command>
            npm install permawebjs
          </Command>
        </GetStarted>
        <Glow />
        <Glow2 />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
  font-weight: 650;
  line-height: 1.2em;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgb(${props => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  font-weight: 500;
`;

const GetStarted = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-top: .4rem;
`;

const Glow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  user-select: none;
  width: 100%;
  padding-top: 10.5%;
  background-color: rgba(${props => props.theme.accent}, .5);
  filter: blur(120px);
  z-index: -2;
  transform: translate(-50%, -50%);
`;

const Glow2 = styled(Glow)`
  width: 60%;
  background: rgba(255, 191, 255, .3);
  mix-blend-mode: hard-light;
  filter: blur(100px);
  z-index: -1;
`;
