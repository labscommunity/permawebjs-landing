import Title, { TitleSection } from "../section/Title";
import Subtitle from "../section/Subtitle";
import styled from "styled-components";
import Editor from "../Editor";

export default function Console() {
  return (
    <Wrapper id="build">
      <TitleSection>
        <Title>
          A one stop shop, without confusion
        </Title>
        <Subtitle>
          Every function has a dedicated page with a breakdown of information to make your building process easier, try it yourself.
        </Subtitle>
      </TitleSection>
      <Editor>
        {`import { createTransaction } from "arweavekit/transaction";

const transaction = await createTransaction({
  key: { KEY_OBJECT },
  type: 'wallet',
  quantity: '1000000',
  target: 'TARGET_WALLET_ADDRESS',
  options: {
    tags: [{ 'name': key_name, 'value': some_value}],
    useBundlr: true,
    environment: 'mainnet',
  },
});`}
      </Editor>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 3.5rem 14vw;

  @media screen and (max-width: 720px) {
    padding: 3rem 8vw;
  }
`;

