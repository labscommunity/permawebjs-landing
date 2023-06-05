import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";

export default function Nav() {
  return (
    <Wrapper>
      <Logo src="/logo.png" width={512} height={512} />
      <Button
        href="https://docs.permawebjs.dev"
        target="_blank"
        rel="noopener noreferer"
      >
        Get Started
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 8vw 0;
`;

const Logo = styled(Image).attrs({
  draggable: false,
  alt: "Arweave Kit"
})`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  user-select: none;
`;
