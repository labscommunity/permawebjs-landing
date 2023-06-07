import Title, { TitleSection } from "../section/Title";
import { Glow, Glow2, Glow3 } from "../patterns/Glow";
import { BottomWeb } from "../patterns/Web";
import Subtitle from "../section/Subtitle";
import styled from "styled-components";
import Button from "../Button";
import Image from "next/image"

export default function Install() {
  return (
    <Wrapper>
      <TitleSection>
        <Title>
          Install the library, and start building
        </Title>
        <Subtitle>
          Unlocking the power of the Permaweb starts with you, let's build.
        </Subtitle>
        <Buttons>
          <Button href="get-started">
            Get Started
          </Button>
          <Button href="https://docs.arweavekit.com" secondary target="_blank" rel="noopener noreferer">
            Explore the Docs
          </Button>
        </Buttons>
      </TitleSection>
      <MechanismDisplay />
      <BottomWeb />
      <Glow />
      <Glow2 />
      <Glow3 />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  padding: 3.5rem 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding-top: 1.5rem;
`;

const MechanismDisplay = styled(Image).attrs({
  draggable: false,
  alt: "Arweave Kit Mechanims",
  width: "2091",
  height: "1689",
  src: "/mechanism.png"
})`
  width: 45vw;
  height: calc(45vw / 100 * 80);
  object-fit: contain;
  user-select: none;

  @media screen and (max-width: 720px) {
    width: 90vw;
    height: calc(90vw / 100 * 80);
  }
`;
