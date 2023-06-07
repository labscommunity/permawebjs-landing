import ExternalLinks from "~/components/landing/ExternalLinks";
import GetStarted from "~/components/landing/GetStarted";
import Explore from "~/components/landing/Explore";
import Install from "~/components/landing/Install";
import Console from "~/components/landing/Console";
import Discord from "~/components/landing/Discord";
import Github from "~/components/landing/Github";
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
      <Install />
      <Explore />
      <Github />
      <Discord />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;
