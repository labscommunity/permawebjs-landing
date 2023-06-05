import GetStarted from "~/components/landing/GetStarted";
import Hero from "~/components/landing/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Hero />
      <GetStarted />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;
