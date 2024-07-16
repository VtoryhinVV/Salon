import styled from '@emotion/styled';
import bgImg from '/src/assets/img/bgVoucher.jpg';
export const KeyBenefitsSect = styled.section`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 30px 0;

  @media screen and (min-width: 1200px) {
    padding: 90px 0;
  }

  & h2 {
    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    text-transform: capitalize;
    text-align: center;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 24px;

    margin-bottom: 30px;
    @media screen and (min-width: 1200px) {
      row-gap: 32px;
      column-gap: 24px;
    }
  }
`;

export const KeyBenefitsItem = styled.li`
  max-width: 416px;
  height: 242px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 16px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 13px 19px 0px #00000012;

  & > h3,
  & > p {
    margin: 0;
  }
  & > h3 {
    font-size: 18px;
    font-weight: 600;
  }
  & > svg {
    width: 40px;
    height: 40px;

    box-sizing: border-box;

    fill: var(--brown);
    margin: 0 auto;
  }
`;
