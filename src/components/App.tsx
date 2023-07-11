import Image from "next/image";
import styled from "styled-components";
import Card from "./Card";

export default function App({ icon, name, description, tags }: Props) {
  return (
    <Wrapper>
      <AppIcon src={icon} />
      <Content>
        <AppName>{name}</AppName>
        <Tags>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
        <AppDescription>{description}</AppDescription>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem;
  cursor: pointer;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const AppIcon = styled(Image).attrs({
  alt: "App Icon",
  width: 512,
  height: 512,
  draggable: false
})`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  user-select: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const AppName = styled.h4`
  font-size: 1.5rem;
  color: rgb(${(props) => props.theme.primaryText});
  font-weight: 550;
  margin: 0;
`;

const AppDescription = styled.p`
  font-size: 0.94rem;
  color: rgb(${(props) => props.theme.secondaryText});
  font-weight: 450;
  margin: 0;
  text-align: justify;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  color: rgba(${(props) => props.theme.secondaryText}, 0.8);
  font-weight: 400;
  padding: 0.16rem 0.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
`;

interface Props {
  icon: string;
  name: string;
  description: string;
  tags: string[];
}
