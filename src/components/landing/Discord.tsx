import Title, { TitleSection } from "../section/Title";
import Subtitle from "../section/Subtitle";
import styled from "styled-components";
import Button from "../Button";

export default function Discord() {
  return (
    <Wrapper>
      <TitleSection>
        <Title>Built by the community, for the community</Title>
        <Subtitle>
          Arweave Kit is open source, and always will be. Connect with other
          builders and get support from the community.
        </Subtitle>
      </TitleSection>
      <Button
        href="https://discord.gg/XG3jTcVC"
        target="_blank"
        rel="noopener noreferer"
      >
        <DiscordIcon />
        Discord
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

const DiscordIcon = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4419 6.25623C18.1279 5.66091 16.7407 5.23857 15.3158 5C15.1208 5.34494 14.9443 5.69983 14.7872 6.0632C13.2694 5.83686 11.7258 5.83686 10.208 6.0632C10.0508 5.69987 9.87437 5.34498 9.67946 5C8.25361 5.24059 6.8655 5.66393 5.55016 6.25934C2.93887 10.0825 2.23099 13.8107 2.58493 17.486C4.11417 18.6041 5.82582 19.4544 7.64548 20C8.05522 19.4547 8.41778 18.8761 8.72933 18.2705C8.13759 18.0518 7.56646 17.782 7.02255 17.4642C7.1657 17.3615 7.3057 17.2556 7.44098 17.1529C9.02364 17.8894 10.751 18.2713 12.5 18.2713C14.2489 18.2713 15.9763 17.8894 17.5589 17.1529C17.6958 17.2634 17.8358 17.3692 17.9774 17.4642C17.4324 17.7825 16.8602 18.0529 16.2675 18.2721C16.5786 18.8774 16.9412 19.4555 17.3513 20C19.1725 19.4566 20.8855 18.6067 22.415 17.4875C22.8303 13.2254 21.7055 9.53144 19.4419 6.25623ZM9.17765 15.2257C8.19134 15.2257 7.37649 14.34 7.37649 13.2503C7.37649 12.1606 8.16302 11.2671 9.1745 11.2671C10.186 11.2671 10.9945 12.1606 10.9772 13.2503C10.9599 14.34 10.1828 15.2257 9.17765 15.2257ZM15.8223 15.2257C14.8344 15.2257 14.0227 14.34 14.0227 13.2503C14.0227 12.1606 14.8092 11.2671 15.8223 11.2671C16.8353 11.2671 17.6376 12.1606 17.6203 13.2503C17.603 14.34 16.8275 15.2257 15.8223 15.2257Z"
      fill="currentColor"
    />
  </svg>
);
