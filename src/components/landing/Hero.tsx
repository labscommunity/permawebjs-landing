import { BottomWeb, TopWeb } from "../patterns/Web";
import { Glow, Glow2 } from "../patterns/Glow";
import styled from "styled-components";
import Command from "../Command";
import Button from "../Button";
import Head from "../Head";
import Nav from "../Nav";

export default function Hero() {
  return (
    <Wrapper>
      <Head />
      <Nav />
      <Content>
        <Title>
          One-stop library for<br/>builders on Arweave
        </Title>
        <Subtitle>
          Leverage the power of the Arweave ecosystem<br/>to build quickly and simply on the permaweb. 
        </Subtitle>
        <GetStarted>
          <Button
            href="https://docs.permawebjs.dev"
            target="_blank"
            rel="noopener noreferer"
          >
            Get Started
          </Button>
          <Command>
            npm install arweave-kit
          </Command>
        </GetStarted>
        <Glow />
        <Glow2 />
        <TopWeb />
        <BottomWeb />
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

  @media screen and (max-width: 720px) {
    gap: 1.6rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
  font-weight: 650;
  line-height: 1.2em;

  @media screen and (max-width: 720px) {
    font-size: 2.35rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgb(${props => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  font-weight: 500;

  @media screen and (max-width: 720px) {
    font-size: 1.05rem;
  }
`;

const GetStarted = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-top: .4rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
    padding-top: 2rem;
    gap: 1rem;
  }
`;
