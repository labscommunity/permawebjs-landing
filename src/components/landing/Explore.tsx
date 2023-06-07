import { FileIcon, GlobeIcon, WalletIcon } from "@iconicicons/react";
import { Link, LinkIcon, LinkTitle } from "./ExternalLinks";
import Title, { TitleSection } from "../section/Title";
import Subtitle from "../section/Subtitle";
import styled from "styled-components";
import App from "../App"

export default function Explore() {
  return (
    <Wrapper id="explore">
      <TitleSection>
        <Title>
          Explore arweave
        </Title>
      </TitleSection>
      <div>
        <SectionTitle>
          Built on Arweave:<br />
          Permanent information storage
        </SectionTitle>
        <SectionDescription>
          Permanent storage has many applications: from the preservation of humanity's most important data, to the hosting of truly decentralized and provably neutral web apps.
        </SectionDescription>
      </div>
      <Cards>
        <a href="https://arconnect.io" target="_blank" rel="noopener noreferrer">
          <LargeLink>
            <LinkIcon />
            <WalletIcon />
            <LinkTitle>
              Setup a Wallet
            </LinkTitle>
          </LargeLink>
        </a>
        <a href="https://arwiki.wiki" target="_blank" rel="noopener noreferrer">
          <LargeLink>
            <LinkIcon />
            <GlobeIcon />
            <LinkTitle>
              Explore the Wiki
            </LinkTitle>
          </LargeLink>
        </a>
        <a href="https://ardrive.io" target="_blank" rel="noopener noreferrer">
          <LargeLink>
            <LinkIcon />
            <FileIcon />
            <LinkTitle>
              Save a file forever
            </LinkTitle>
          </LargeLink>
        </a>
      </Cards>
      <div>
        <SectionTitle>
          Get Inspired
        </SectionTitle>
        <SectionDescription>
          Featured Arweave dApps, explore the full list <a href="https://list.weavescan.com" target="_blank" rel="noopener noreferer">here</a>.
        </SectionDescription>
      </div>
      <Cards>
        <a href="https://akord.com" target="_blank" rel="noopener noreferrer">
          <App
            icon="/akord.png"
            name="Akord"
            description="Akord provides a seamless user experience for storing and publishing files on Arweave's blockchain."
            tags={["Storage", "Permanent", "Files"]}
          />
        </a>
        <a href="https://ardrive.io" target="_blank" rel="noopener noreferrer">
          <App
            icon="/ardrive.png"
            name="ArDrive"
            description="ArDrive offers never-ending storage of your most valuable files. Pay once and save your memories forever."
            tags={["Storage", "Permanent", "Files"]}
          />
        </a>
        <a href="https://permafacts.arweave.dev" target="_blank" rel="noopener noreferrer">
          <App
            icon="/permafacts.svg"
            name="Permafacts"
            description="A provably neutral publishing platform, built on top of the #FactsProtocol, aimed at dis-intermediating the truth."
            tags={["Facts", "Social"]}
          />
        </a>
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 3.5rem 8vw;
`;

const SectionTitle = styled.h3`
  font-size: 2.4rem;
  color: rgb(${props => props.theme.primaryText});
  text-align: left;
  margin: 0 0 1rem;
  font-weight: 600;
  line-height: 1.2em;

  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
`;

const SectionDescription = styled(Subtitle)`
  text-align: left;
  width: auto !important;
  max-width: unset;

  a {
    text-decoration: underline;
    color: inherit;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: none;
  }
`;

const LargeLink = styled(Link)`
  padding: 3.5rem 0;
`;
