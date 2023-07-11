import {
  CoinsHand,
  CreditCardEdit,
  Fingerprint03,
  LinkExternal01,
  Wallet01
} from "@untitled-ui/icons-react";
import styled from "styled-components";
import Card from "../Card";

export default function ExternalLinks() {
  return (
    <Wrapper>
      <a
        href="https://docs.arweavekit.com/wallets/introduction"
        target="_blank"
        rel="noopener noreferer"
      >
        <Link>
          <LinkIcon viewBox="0 0 24 24" />
          <Wallet01 viewBox="0 0 24 24" />
          <LinkTitle>
            Wallet
            <br />
            Functions
          </LinkTitle>
        </Link>
      </a>
      <a
        href="https://docs.arweavekit.com/transactions/introduction"
        target="_blank"
        rel="noopener noreferer"
      >
        <Link>
          <LinkIcon viewBox="0 0 24 24" />
          <CoinsHand viewBox="0 0 24 24" />
          <LinkTitle>
            Transaction
            <br />
            Functions
          </LinkTitle>
        </Link>
      </a>
      <a
        href="https://docs.arweavekit.com/smart-contracts/introduction-to-smart-contracts"
        target="_blank"
        rel="noopener noreferer"
      >
        <Link>
          <LinkIcon viewBox="0 0 24 24" />
          <CreditCardEdit viewBox="0 0 24 24" />
          <LinkTitle>
            Contract
            <br />
            Functions
          </LinkTitle>
        </Link>
      </a>
      <a
        href="https://docs.arweavekit.com/auth/introduction-to-auth"
        target="_blank"
        rel="noopener noreferer"
      >
        <Link>
          <LinkIcon viewBox="0 0 24 24" />
          <Fingerprint03 viewBox="0 0 24 24" />
          <LinkTitle>
            Auth
            <br />
            Functions
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
  padding: 3.5rem 8vw;

  a {
    display: block;
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Link = styled(Card)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;
  padding: 2rem 0;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 2.5rem;
    color: rgb(${(props) => props.theme.primaryText});
    width: 1em;
    height: 1em;
  }
`;

export const LinkTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 450;
  color: rgb(${(props) => props.theme.primaryText});
  text-align: center;
  margin: 0;
`;

export const LinkIcon = styled(LinkExternal01)`
  position: absolute;
  width: 1.2rem !important;
  height: 1.2rem !important;
  color: rgb(${(props) => props.theme.secondaryText}) !important;
  top: 1rem;
  right: 1rem;
`;
