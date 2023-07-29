import styled from "@emotion/styled";
export const HeroSection = styled.section`
  padding-top: 32px;
  background: url("/public/img/bg.jpg");
`;

export const Content = styled.div`
  position: relative;
  max-width: 1676px;
  max-height: 928px;
  margin: 0 auto;
`;

export const Ellipse = styled.div`
  background-color: var(--brown);
  border-radius: 605px/231.5px;
  filter: blur(113px);

  mix-blend-mode: multiply;
  opacity: 0.8;
  position: absolute;
  top: 197px;
  left: 276px;
  width: 70%;
  height: 40%;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0.800000011920929;
  background: var(--brown);
  mix-blend-mode: multiply;
`;

export const TextContant = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: 50;
  color: var(--white);
  padding: 24px 0;

  & > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AdresseInfo = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0 0 262px;
  padding: 0;
  & li {
    display: flex;
    gap: 8px;
    align-items: center;
    & p {
      margin: 0;
    }
  }
`;

export const MainTitle = styled.div`
  text-align: center;

  & h1 {
    font-family: Prata;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: capitalize;
    width: 90%;
    margin: 0 auto;
  }

  & p {
    margin: 24px 0;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.32px;
  }

  & button {
    border: 1px solid var(--brown);
    background: var(--white, #fff);
    padding: 10px 24px;

    color: var(--brown);
    letter-spacing: 0.32px;
    text-transform: uppercase;
  }
`;
