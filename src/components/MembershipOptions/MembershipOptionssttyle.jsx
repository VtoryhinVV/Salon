import styled from '@emotion/styled';

export const MembershipOptionsSect = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  h2,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 1200px) {
      flex-direction: row;
      text-align: left;
    }
  }
`;

export const MembershipOptionsImg = styled.div`
  display: flex;
  align-items: baseline;
  gap: 18px;
  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;
export const MembershipOptionsInfo = styled.div`
  & h2 {
    font-family: Prata;
    font-size: 38px;
    font-weight: 400;
    margin-bottom: 24px;
    @media screen and (min-width: 1200px) {
      font-size: 48px;
    }
  }
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  & li {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    align-items: start;

    box-shadow: 0px 13px 19px 0px #00000012;

    & p {
      font-family: Playfair Display;
      font-size: 24px;
      font-weight: 400;
      line-height: 31.99px;
      text-align: left;
      /* margin-bottom: 24px; */
    }

    & a {
      display: inline-block;
      border: 1px solid var(--brown);

      padding: 12px 24px;

      color: var(--brown);
      text-transform: uppercase;
      text-decoration: none;

      transition: all 0.3s ease;

      &:hover,
      &:focus {
        border-color: var(--focus);
        color: var(--focus);
      }
    }
  }
`;
