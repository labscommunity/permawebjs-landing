import Nav from "../../components/Nav";
import Head from "../../components/Head";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import plugInList from '../../components/plugIn/plugIns.json';
import axios from 'axios';
import { FaCodeBranch, FaClock, FaRegEye, FaLaptopCode, FaUserFriends, FaGithub, FaClipboard, FaRegAngry, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Footer from "~/components/Footer";


function HumanReadableDate(timestamp: any) {
    const date = new Date(timestamp);
    return date.toLocaleString()
};
  

export default function Hero() {
    const packageName = 'ArConnect';
    const [githubData, setGithubData] = useState<GithubData | null>(null);
    const [readme, setReadme] = useState<string | null>(null);
    const packageData = plugInList.find(pkg => pkg.name === packageName);

    useEffect(() => {
        async function fetchData() {
            if (!packageData) return;
            try {
                const response = await axios.get('https://api.github.com/repos/' + packageData.githubRepo);
                setGithubData(response.data);

                const readmeResponse = await axios.get(`https://api.github.com/repos/${packageData.githubRepo}/readme`);
                const readmeContent = atob(readmeResponse.data.content); 
                setReadme(readmeContent);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [packageName, packageData]);

    if (!packageData) {
        return <div>Plugin not found</div>;
    }

    return (
        <Wrapper>
            <Head />
            <Nav />
            <Content>

                <Header>
                    <LogoSection>
                        <img src={packageData.logo} alt={`${packageData.name} Logo`} />
                        <div>
                            <h1>{packageData.name}</h1>
                            <p>{packageData.description}</p>
                            <div>
                                <a href={packageData.websiteLink} target='_blank'><FaExternalLinkAlt /> Website</a>
                                <a href={'https://protocolland.arweave.dev/' + packageData.name} target='_blank'><img src='/protocolLand.svg' /> Protocol Land</a>
                                <a href={'https://github.com/' + packageData.githubRepo} target='_blank'><FaGithub /> GitHub</a>
                            </div>
                        </div>
                    </LogoSection>

                    <StatsSection>
                        <div>
                            {githubData && <div><FaCodeBranch /> {githubData.forks}</div>}
                            {githubData && <div><FaRegEye /> {githubData.watchers}</div>}
                            {githubData && <div><FaRegAngry />{githubData.open_issues}</div>}
                            {githubData && <div><FaStar />{githubData.stargazers_count}</div>}
                        </div>
                        {githubData && <div><FaClock /> {HumanReadableDate(githubData.created_at)}</div>}
                        {githubData && githubData.organization && <a href={githubData.organization.html_url} target='_blank'><FaUserFriends /> {githubData.organization.login}</a>}
                        {githubData && githubData.license && <div><FaClipboard /> {githubData.license.name}</div>}
                        {githubData && <div><FaLaptopCode /> {githubData.language}</div>}
                    </StatsSection>
                </Header>

                <ReadmeContent>
                    {readme ? <ReactMarkdown children={readme} /> : "Loading README..."}
                </ReadmeContent>


            </Content>
            <Footer />
        </Wrapper>
    );
}

interface GithubData {
    created_at?: string;
    forks?: number;
    language?: string;
    license?: {
        name?: string;
    };
    open_issues?: number;
    organization?: {
        html_url?: string;
        login?: string;
    };
    updated_at?: string;
    watchers?: number;
    stargazers_count?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    overflow: hidden;
  }
`;

const Content = styled.section`
  margin-top: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 0 8vw 0;
  min-height: 100vh;
  background-color: white;
  padding-top: 5vh;

  @media screen and (max-width: 720px) {
    gap: 1.6rem;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 2rem;
    div {
        display: flex;
        margin: 0;
        gap: 1rem;
        a {
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            img {
                height: 15px;
                filter: brightness(0);
            }
        }
    }
  }

  img {
    height: 200px;  
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  a {
    color: black;
    text-decoration: none;
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;


const ReadmeContent = styled.div`
  padding: 20px;
  padding-top: 0;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  overflow: auto;
`;



