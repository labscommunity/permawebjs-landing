import { ClipboardIcon } from "@iconicicons/react";
import { IBM_Plex_Mono } from "next/font/google";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import Card from "./Card";

const CodeFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export default function Editor({ children, hideBg = false }: Props) {
  console.log(children.split("\n"))
  return (
    <Wrapper hideBg={hideBg}>
      <LineCount>
        {new Array(children.split("\n").length + 3).fill("").map((_, i) => (
          <LineNumber key={i}>
            {i + 1}
          </LineNumber>
        ))}
      </LineCount>
      <Content>
        {children.split("\n").map((val, i) => (
          <Line key={i}>
            {val}
          </Line>
        ))}
      </Content>
      <CopyButton onClick={() => copy(children)}>
        Copy
        <ClipboardIcon />
      </CopyButton>
    </Wrapper>
  );
}

const Wrapper = styled(Card)<{ hideBg: boolean }>`
  position: relative;
  display: flex;
  padding: 0;
  overflow: hidden;
  border-radius: 12px;
  ${props => props.hideBg && "background-color: transparent;"}
  ${CodeFont.style};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  overflow-x: auto;
  padding: .65rem .8rem;
`;

const LineCount = styled(Content)`
  background: rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  user-select: none;
`;

const LineNumber = styled.span`
  font-size: 1rem;
  line-height: 1.3em;
  height: 1.3em;
  font-weight: 600;
  color: rgba(255, 255, 255, .2);
`;

const Line = styled(LineNumber)`
  color: rgb(216, 200, 135);
`;

const CopyButton = styled.button`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 400;
  padding: .55rem .8rem;
  gap: .5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(${props => props.theme.primaryText}, .7);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  bottom: .85rem;
  right: .85rem;
  transition: all .23s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.385em;
    width: 1em;
    height: 1em;
  }
`;

interface Props {
  children: string;
  hideBg?: boolean;
}