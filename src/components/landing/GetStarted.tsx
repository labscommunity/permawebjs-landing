import { ArrowDownIcon, GlobeIcon } from "@iconicicons/react";
import styled from "styled-components";
import Title from "../section/Title";
import Card from "../Card";

export default function GetStarted() {
  return (
    <Wrapper>
      <Title>
        Getting started is easy as 1,2,3...
      </Title>
      <Steps>
        <Step>
          <GlobeIcon />
          <StepTitle>
            Learn
          </StepTitle>
          <StepScrollIndicator />
        </Step>
        <Separator />
        <Step>
          <GlobeIcon />
          <StepTitle>
            Build
          </StepTitle>
          <StepScrollIndicator />
        </Step>
        <Separator />
        <Step>
          <GlobeIcon />
          <StepTitle>
            Explore
          </StepTitle>
          <StepScrollIndicator />
        </Step>
      </Steps>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 5.5rem 0;
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.5rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Step = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .55rem;
  width: 7rem;
  height: 7rem;
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
    font-size: 2.3rem;
    color: rgb(${props => props.theme.primaryText});
    width: 1em;
    height: 1em;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
`;

const StepScrollIndicator = styled(ArrowDownIcon)`
  font-size: 1.45rem !important;
`;

const Separator = styled.div`
  width: 4.5rem;
  border: 1px solid rgba(255, 255, 255, .8);

  @media screen and (max-width: 720px) {
    width: unset;
    height: 4.5rem;
  }
`;
