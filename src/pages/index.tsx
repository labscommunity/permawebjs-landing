import GetStarted from "~/components/landing/GetStarted";
import Learn from "~/components/landing/Learn";
import Hero from "~/components/landing/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Hero />
      <GetStarted />
      <Learn />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;
