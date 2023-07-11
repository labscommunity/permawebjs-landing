import { Copy06 } from "@untitled-ui/icons-react";
import { IBM_Plex_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";

const CodeFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export default function Command({ children }: PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <Content>
        <span>{"$ "}</span>
        {children}
      </Content>
      <Copy onClick={() => copy(children as string)} viewBox="0 0 24 24" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  background: linear-gradient(
    302.21deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;

const Content = styled.p`
  ${CodeFont.style}
  font-size: .9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;

  span {
    user-select: none;
  }
`;

const Copy = styled(Copy06)`
  width: 1.1rem;
  height: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.18s ease-in-out;

  &:hover {
    opacity: 0.82;
  }

  &:active {
    transform: scale(0.85);
  }
`;
