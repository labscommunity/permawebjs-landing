import Hero from "~/components/landing/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Hero />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;
