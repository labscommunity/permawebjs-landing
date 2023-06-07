import ExternalLinks from "~/components/landing/ExternalLinks";
import GetStarted from "~/components/landing/GetStarted";
import Console from "~/components/landing/Console";
import Learn from "~/components/landing/Learn";
import Hero from "~/components/landing/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Hero />
      <GetStarted />
      <Learn />
      <ExternalLinks />
      <Console />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;
