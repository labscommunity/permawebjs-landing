import ExternalLinks from "~/components/landing/ExternalLinks";
import GetStarted from "~/components/landing/GetStarted";
import Explore from "~/components/landing/Explore";
import Install from "~/components/landing/Install";
import Console from "~/components/landing/Console";
import Discord from "~/components/landing/Discord";
import Github from "~/components/landing/Github";
import Learn from "~/components/landing/Learn";
import Hero from "~/components/landing/Hero";
import Footer from "~/components/Footer";
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
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  position: relative;

  @media screen and (max-width: 720px) {
    overflow-x: hidden;
  }
`;
