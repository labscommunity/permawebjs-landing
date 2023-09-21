import { BottomWeb, TopWeb } from "../patterns/Web";
import { Glow, Glow2 } from "../patterns/Glow";
import styled from "styled-components";
import Button from "../Button";
import Head from "../Head";
import Nav from "../Nav";
import plugInList from './plugIns.json';
import React, { useState } from 'react';


export default function Hero() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState<Plugin[]>([]);

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            const foundPlugins = plugInList.filter(plugin => plugin.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setResult(foundPlugins);
        }
    };
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        handleSearch();
    };
    

  return (
    <Wrapper>
        <Head />
        <Nav />
        <Content>
          <HeroContainer>
              <Title>Powerful Plugins</Title> 
              <Subtitle>For the new web.</Subtitle>
              <SearchInput 
                  type="text" 
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search for a plugin..."
              />
          </HeroContainer>
          <TopWeb />
          <BottomWeb />
          <Glow />
          <Glow2 />
        
          <GridContainer>
              {
                  searchTerm.trim() === "" ? (
                      plugInList.map((plugin) => (
                          <GridItem key={plugin.name} primaryColor={plugin.primaryColor} href={'/plugins/' + plugin.name}>
                              <img src={plugin.logo} alt={plugin.name} />
                              <h2>{plugin.name}</h2>
                              <p>{plugin.description}</p>
                          </GridItem>
                      ))
                  ) : result.length > 0 ? (
                      result.map((plugin) => (
                          <GridItem key={plugin.name} primaryColor={plugin.primaryColor} href={'/plugins/' + plugin.name}>
                              <img src={plugin.logo} alt={plugin.name} />
                              <h2>{plugin.name}</h2>
                              <p>{plugin.description}</p>
                          </GridItem>
                      ))
                  ) : (
                      <p>Plugin not found</p>
                  )
              }
          </GridContainer>
          
        </Content>
    </Wrapper>
  );
}


type Plugin = {
    name: string;
    logo: string;
    description: string;
    websiteLink: string;
    githubRepo: string;
    primaryColor: string;
};



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    overflow: hidden;
  }
`;

const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0 8vw 0;

  @media screen and (max-width: 720px) {
    gap: 1.6rem;
  }
`;



const HeroContainer = styled.div`
  margin-top: 25vh;
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;


const Title = styled.h1`
  font-size: 4rem;
  color: rgb(${(props) => props.theme.primaryText});
  text-align: center;
  margin: 0;
  font-weight: 650;
  line-height: 1.2em;

  @media screen and (max-width: 720px) {
    font-size: 2.35rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgb(${(props) => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  font-weight: 500;

  @media screen and (max-width: 720px) {
    font-size: 1.05rem;
  }
`;



const SearchInput = styled.input`
    padding: 0.8rem 1.2rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
    width: 100%;
    max-width: 400px;
    &:focus { border-color: ${(props) => props.theme.primaryText}; }
    &:hover { border-color: ${(props) => props.theme.secondaryText}; }
    &::placeholder { color: #aaa; }
`;





const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;



type GridItemProps = {
    primaryColor: string;
};
const GridItem = styled.a<GridItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid ${(props) => props.primaryColor};
  border-radius: 8px;
  transition: transform 0.2s;
  background-color: #FFFF;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  h2 {
    margin: 0.5rem 0;
    color: ${(props) => props.primaryColor};
  }

  p {
    text-align: center;
  }

  a {
    margin-top: 0.5rem;
    color: ${(props) => props.primaryColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
