import { IBM_Plex_Mono } from "next/font/google";
import { CopyIcon } from "@iconicicons/react";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";

const CodeFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export default function Command({ children }: PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <Content>
        <span>
          {"$ "}
        </span>
        {children}
      </Content>
      <Copy onClick={() => copy(children as string)} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .55rem;
  padding: .65rem 1rem;
  border-radius: 8px;
  background: linear-gradient(302.21deg, rgba(255, 255, 255, .1) 0%, rgba(255, 255, 255, .05) 100%);
  border: 1px solid #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, .1);
  backdrop-filter: blur(4px);
`;

const Content = styled.p`
  ${CodeFont.style}
  font-size: .9rem;
  color: rgba(255, 255, 255, .8);
  margin: 0;

  span {
    user-select: none;
  }
`;

const Copy = styled(CopyIcon)`
  font-size: 1rem;
  width: 1em;
  height: 1em;
  color: #fff;
  cursor: pointer;
  transition: all .18s ease-in-out;

  &:hover {
    opacity: .82;
  }

  &:active {
    transform: scale(.85);
  }
`;
