import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";

export default function Nav() {
  return (
    <Wrapper>
      <a href="/"><Logo src="/logo.png" width={512} height={512} /></a>
      <span>
        <a href="/plugins">Plugins</a>
        <Button
          href="https://docs.arweavekit.com"
          target="_blank"
          rel="noopener noreferer"
        >
          Get Started
        </Button>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 8vw 0;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const Logo = styled(Image).attrs({
  draggable: false,
  alt: "Arweave Kit"
})`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  user-select: none;

  @media screen and (max-width: 720px) {
    opacity: 0;
  }
`;
