import Title, { TitleSection } from "../section/Title";
import styled from "styled-components";
import Button from "../Button";

export default function Github() {
  return (
    <Wrapper>
      <TitleSection>
        <Title>
          Join the Github Discussion and Share Your Ideas to Help Shape the Future of Arweave Kit
        </Title>
      </TitleSection>
      <Button secondary>
        <GithubIcon />
        Contribute
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3.5rem 8vw;
`;

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.625C6.475 2.625 2 6.98378 2 12.3653C2 16.6754 4.8625 20.3158 8.8375 21.6064C9.3375 21.6916 9.525 21.3994 9.525 21.1437C9.525 20.9124 9.5125 20.1453 9.5125 19.3296C7 19.7801 6.35 18.733 6.15 18.1851C6.0375 17.9051 5.55 17.0406 5.125 16.8093C4.775 16.6267 4.275 16.1762 5.1125 16.164C5.9 16.1518 6.4625 16.8702 6.65 17.1624C7.55 18.6356 8.9875 18.2216 9.5625 17.966C9.65 17.3328 9.9125 16.9067 10.2 16.6632C7.975 16.4197 5.65 15.5796 5.65 11.8539C5.65 10.7947 6.0375 9.91804 6.675 9.23622C6.575 8.99272 6.225 7.99434 6.775 6.65505C6.775 6.65505 7.6125 6.39936 9.525 7.65343C10.325 7.43427 11.175 7.32469 12.025 7.32469C12.875 7.32469 13.725 7.43427 14.525 7.65343C16.4375 6.38719 17.275 6.65505 17.275 6.65505C17.825 7.99434 17.475 8.99272 17.375 9.23622C18.0125 9.91804 18.4 10.7825 18.4 11.8539C18.4 15.5918 16.0625 16.4197 13.8375 16.6632C14.2 16.9676 14.5125 17.552 14.5125 18.4651C14.5125 19.7679 14.5 20.815 14.5 21.1437C14.5 21.3994 14.6875 21.7038 15.1875 21.6064C19.1375 20.3158 22 16.6632 22 12.3653C22 6.98378 17.525 2.625 12 2.625Z" fill="currentColor" />
  </svg>
);
