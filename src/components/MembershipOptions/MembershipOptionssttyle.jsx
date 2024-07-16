import styled from '@emotion/styled';

export const MembershipOptionsSect = styled.section`
  padding: 60px 0;

  h2,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 120px 0;
  }
`;

export const MembershipOptionsInfo = styled.div`
  & h2 {
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    margin-bottom: 24px;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 24px;
    @media screen and (min-width: 1200px) {
      font-size: 48px;
      margin-bottom: 40px;
    }
  }
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    @media screen and (min-width: 1200px) {
      gap: 40px;
    }
  }

  & a {
    padding: 24px 0;
    border-radius: 25px;
    text-align: center;
    display: inline-block;

    color: white;
    background-color: var(--brown);
    text-transform: uppercase;
    text-decoration: none;

    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: var(--focus);
    }
    @media screen and (min-width: 420px) {
      width: 380px;
    }

    @media screen and (min-width: 1200px) {
      width: 427px;
    }
  }
`;
