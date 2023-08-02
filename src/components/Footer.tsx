import { Glow, Glow2, Glow3 } from "./patterns/Glow";
import { BottomWeb } from "./patterns/Web";
import styled from "styled-components";
import Title from "./section/Title";
import Image from "next/image";

export default function Footer() {
  return (
    <Wrapper>
      <Title>In collaboration with</Title>
      <a
        href="https://communitylabs.com"
        target="_blank"
        rel="noopener noreferer"
      >
        <CLabs src="/clabs.png" width={1022} height={256} />
      </a>
      <Copyright>
        Arweave Kit
        <br />© 2023 All Rights Reserved
      </Copyright>
      <PrivacyPolicy
        target="_blank"
        rel="noopener noreferer"
        href="https://drive.google.com/file/d/15GnFqWS9YHUCK2tvaAR01Uor0S7q5RS2/view?pli=1"
      >
        Privacy Policy
      </PrivacyPolicy>
      <BottomWeb />
      <Glow />
      <Glow2 />
      <Glow3 />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3.5rem 8vw;
`;

const PrivacyPolicy = styled.a`
  color: rgb(${(props) => props.theme.secondaryText}, 0.8);
  text-decoration: none;
  cursor: pointer;
`;

const CLabs = styled(Image).attrs({
  alt: "Community Labs",
  draggable: false
})`
  user-select: none;
  object-fit: contain;
  width: 255px;
  height: 64px;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: rgb(${(props) => props.theme.secondaryText}, 0.8);
  text-align: center;
  margin: 1rem;
  font-weight: 450;
`;
