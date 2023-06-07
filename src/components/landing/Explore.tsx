import { FileIcon, GlobeIcon, WalletIcon } from "@iconicicons/react";
import { Link, LinkIcon, LinkTitle } from "./ExternalLinks";
import Title, { TitleSection } from "../section/Title";
import Subtitle from "../section/Subtitle";
import styled from "styled-components";
import App from "../App"

export default function Explore() {
  return (
    <Wrapper>
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
        <LargeLink>
          <LinkIcon />
          <WalletIcon />
          <LinkTitle>
            Setup a Wallet
          </LinkTitle>
        </LargeLink>
        <LargeLink>
          <LinkIcon />
          <GlobeIcon />
          <LinkTitle>
            Explore the Wiki
          </LinkTitle>
        </LargeLink>
        <LargeLink>
          <LinkIcon />
          <FileIcon />
          <LinkTitle>
            Save a file forever
          </LinkTitle>
        </LargeLink>
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
        <App
          icon="/logo.png"
          name="App name"
          description="This is an example description for an application. I have to write something else here to fill the space lol. We need something here..."
          tags={["Tag", "Tag", "Tag"]}
        />
        <App
          icon="/logo.png"
          name="App name"
          description="This is an example description for an application. I have to write something else here to fill the space lol. We need something here..."
          tags={["Tag", "Tag", "Tag"]}
        />
        <App
          icon="/logo.png"
          name="App name"
          description="This is an example description for an application. I have to write something else here to fill the space lol. We need something here..."
          tags={["Tag", "Tag", "Tag"]}
        />
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
`;

const LargeLink = styled(Link)`
  padding: 3.5rem 0;
`;
