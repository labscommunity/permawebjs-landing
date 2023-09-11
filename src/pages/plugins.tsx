import Hero from "~/components/plugIn/Hero";
import Footer from "~/components/Footer";
import styled from "styled-components";



export default function PlugIn() {
  return (
    <Main>
      <Hero />
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
