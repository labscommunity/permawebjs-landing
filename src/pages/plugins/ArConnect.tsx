import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaCodeBranch, FaClock, FaRegEye, FaLaptopCode, FaUserFriends, FaGithub, FaClipboard, FaRegAngry, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Nav from "../../components/Nav";
import Head from "../../components/Head";
import Footer from "~/components/Footer";
import plugInList from '../../components/plugIn/plugIns.json';

function HumanReadableDate(timestamp: any) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

export default function Hero() {
    const packageName = 'ArConnect';
    const NpmName = 'arconnect';
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

    if (!packageData) return <div>Plugin not found</div>;

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
                                <a href={packageData.websiteLink} target='_blank' rel="noopener noreferrer"><FaExternalLinkAlt /> Website</a>
                                {/* <a href={'https://protocolland.arweave.dev/' + packageData.name} target='_blank' rel="noopener noreferrer"><img src='/protocolLand.svg' alt='Protocol Land' /> Protocol Land</a> */}
                                <a href={'https://github.com/' + packageData.githubRepo} target='_blank' rel="noopener noreferrer"><FaGithub /> GitHub</a>
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
                        {githubData && githubData.organization && <a href={githubData.organization.html_url} target='_blank' rel="noopener noreferrer"><FaUserFriends /> {githubData.organization.login}</a>}
                        {githubData && githubData.license && <div><FaClipboard /> {githubData.license.name}</div>}
                        {githubData && <div><FaLaptopCode /> {githubData.language}</div>}
                    </StatsSection>
                </Header>
                <InfoContainer>
                    <ReadmeContent>
                        {readme ? <ReactMarkdown children={readme} /> : "Loading README..."}
                    </ReadmeContent>
                    <CodeBox>
                        <section>
                            <h4>Install the Package</h4>
                            <pre>{`$ npm install ${NpmName}`}</pre>
                        </section>
                        <section>
                            <h4>Create a Plugin</h4>
                            <pre>{`// Plug in the whole package\n\nimport * as ${NpmName}Plugin from '${NpmName}'\n\nfunction MyPlugin() {\n\n  return ${NpmName}Plugin\n\n}`}</pre>
                        </section>
                        <section>
                            <h4>Usage</h4>
                            <pre>{`// Use a function from the Plugin\n\nimport * as ${NpmName}Plugin from '${NpmName}';\n\nimport { ArweaveKit } from 'arweavekit/VERSION';\n\nconst arweaveKit = ArweaveKit.use({ name: '${NpmName}Plugin', plugin: ${NpmName}Plugin });\n\nconsole.log(arweavekit.functionFromExternalPackage())`}</pre>
                        </section>
                    </CodeBox>
                </InfoContainer>
            </Content>
            <Footer />
        </Wrapper>
    );
}

interface GithubData {
    created_at?: string;
    forks?: number;
    language?: string;
    license?: { name?: string; };
    open_issues?: number;
    organization?: { html_url?: string; login?: string; };
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
        padding: 0 2vw 0;
    }
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const LogoSection = styled.div`
    display: flex;
    align-items: center;
    img {
        height: auto;
        max-height: 200px;
        max-width: 100%;
    }
    div {
        margin-left: 1rem;
        div {
            margin-left: 0;
            width: 100%;
            display: flex;
            margin-top: 1rem;
            gap: 1rem;
            a {
                color: black;
                display: flex;
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
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 25px;
        img {
            max-height: 150px;
        }
    }
    @media screen and (max-width: 768px) {
        align-items: center;
        div {
            justify-content: center;
        }
    }
`;

const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a {
        color: black;
        text-decoration: none;
        display: flex;
        gap: 1rem;
        align-items: center;
        div {
            display: flex;
            gap: 0.5rem;
        }
    }
    div {
        display: flex;
        gap: 1rem;
        align-items: center;
        div {
            display: flex;
            gap: 0.5rem;
        }
    }
    @media screen and (max-width: 768px) {
        align-items: center;
        div {
            justify-content: center;
        }
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

const ReadmeContent = styled.article`
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
    border: 1px solid lightgray;
    margin-bottom: 25px;
`;

const CodeBox = styled.aside`
    width: 300px;
    border: 1px solid lightgray;
    color: black;
    padding: 2rem;
    height: fit-content;
    margin-bottom: 25px;
    section {
        margin-bottom: 2rem;
        pre {
          border: 1px solid lightgray;
          color: black;
            background-color: white;
            padding: 1rem;
            overflow-x: auto;
        }
    }
    @media screen and (max-width: 720px) {
        width: 100%;
    }
`;
