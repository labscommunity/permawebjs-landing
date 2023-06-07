import Title, { TitleSection } from "../section/Title";
import Subtitle from "../section/Subtitle";
import styled from "styled-components";
import Editor from "../Editor";

export default function Console() {
  return (
    <Wrapper>
      <TitleSection>
        <Title>
          A one stop shop, without confusion
        </Title>
        <Subtitle>
          Every function has a dedicated page with a breakdown of information to make your building process easier, try it yourself.
        </Subtitle>
      </TitleSection>
      <Editor>
        {`import { thirdwebSDK } from "@thirdweb-dev/sdk";

// initialize the SDK
const sdk = new thirdwebSDK("mumbai");

// connect to your smart contract
const contract = await sdk.getContract("a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v22w23x24y25z26");

// get all NFTs
const nfts = await contract.erc721.getAll();

console.info(nfts);`}
      </Editor>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 3rem 14vw;

  @media screen and (max-width: 720px) {
    padding: 3rem 8vw;
  }
`;

