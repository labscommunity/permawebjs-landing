import Subtitle from "../section/Subtitle";
import Title, { TitleSection } from "../section/Title";
import styled from "styled-components";
import Editor from "../Editor";
import Card from "../Card";

export default function Learn() {
  return (
    <Wrapper id="learn">
      <TitleSection>
        <Title>
          Learn about library functions
        </Title>
        <Subtitle>
          Arweave Kit combines tools and resources into one easy to use library, to get started building with Arweave. 
        </Subtitle>
      </TitleSection>
      <ContentCard>
        <Step>
          <div>
            <StepTitle>
              <StepNumber>
                1
              </StepNumber>
              Start
            </StepTitle>
            <StepDescription>
              To begin using the library functions, install the package in the application.
            </StepDescription>
          </div>
          <Editor hideBg>
            {`npm install arweavekit
            # or
            yarn add arweavekit`}
          </Editor>
        </Step>
        <Step>
          <div>
            <StepTitle>
              <StepNumber>
                2
              </StepNumber>
              Import
            </StepTitle>
            <StepDescription>
              Import individual functions from specific function types.
            </StepDescription>
          </div>
          <Editor hideBg>
            {`import { createWallet } from "permawebjs/wallet";

const wallet = await createWallet();`}
          </Editor>
        </Step>
      </ContentCard>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  jutify-content: center;
  gap: 4.5rem;
  padding: 3.5rem 8vw;
`;

const ContentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2 * 3.2rem);
  padding: 3.2rem;
  gap: 2.8rem;

  @media screen and (max-width: 720px) {
    width: calc(100% - 2 * 1.5rem);
    padding: 1.5rem;
  }
`;

const Step = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const StepTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  font-size: 2.4rem;
  color: rgb(${props => props.theme.primaryText});
  margin: 0 0 1.45rem;
  font-weight: 600;
  line-height: 1.2em;
`;

const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: rgb(${props => props.theme.primaryText});
  color: rgb(${props => props.theme.background});
  font-size: .6em;
  text-align: center;
  border-radius: 100%;
  line-height: 1em;
`;

const StepDescription = styled(Subtitle)`
  text-align: justify;
`;