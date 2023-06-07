import { ShareIcon, WalletIcon } from "@iconicicons/react";
import styled from "styled-components";
import Card from "../Card";

export default function ExternalLinks() {
  return (
    <Wrapper>
      <a href="https://docs.permawebjs.dev/wallets/introduction" target="_blank" rel="noopener noreferer">
        <Link>
          <LinkIcon />
          <WalletIcon />
          <LinkTitle>
            Wallet<br />Functions
          </LinkTitle>
        </Link>
      </a>
      <a href="https://docs.permawebjs.dev/transactions/introduction" target="_blank" rel="noopener noreferer">
        <Link>
          <LinkIcon />
          <WalletIcon />
          <LinkTitle>
            Transaction<br />Functions
          </LinkTitle>
        </Link>
      </a>
      <a href="https://docs.permawebjs.dev/smart-contracts/introduction-to-smart-contracts" target="_blank" rel="noopener noreferer">
        <Link>
          <LinkIcon />
          <WalletIcon />
          <LinkTitle>
            Contract<br />Functions
          </LinkTitle>
        </Link>
      </a>
      <a href="https://docs.permawebjs.dev/auth/introduction-to-auth" target="_blank" rel="noopener noreferer">
        <Link>
          <LinkIcon />
          <WalletIcon />
          <LinkTitle>
            Auth<br />Functions
          </LinkTitle>
        </Link>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.75rem;
  padding: 3rem 8vw;

  a {
    display: block;
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Link = styled(Card)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .65rem;
  padding: 2rem 0;
  box-shadow: none;
  cursor: pointer;
  transition: all .23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 2.5rem;
    color: rgb(${props => props.theme.primaryText});
    width: 1em;
    height: 1em;
  }
`;

const LinkTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 450;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
`;

const LinkIcon = styled(ShareIcon)`
  position: absolute;
  font-size: 1.4rem !important;
  color: rgb(${props => props.theme.secondaryText}) !important;
  top: 1rem;
  right: 1rem;
`;
