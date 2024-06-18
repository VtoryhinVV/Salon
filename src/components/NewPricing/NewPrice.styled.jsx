import styled from '@emotion/styled';

export const TwoColumnBlock = styled.div`
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const TwoColumnContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    & ul {
      width: 567px;
    }
  }
`;

export const LeftPrice = styled.ul`
  & li:last-child {
    border-bottom: none !important;
  }

  @media screen and (min-width: 768px) {
    border-right: 1px solid var(--grey);
    padding-right: 28px;
    margin-right: 28px;
    & li {
      padding-top: ${props => (props.paddBotox ? `29px` : '24px')};
      padding-bottom: ${props => (props.paddBotox ? `29px` : '24px')};
    }
    & li:last-child {
      border-bottom: 1px solid var(--grey) !important;
    }
  }

  @media screen and (min-width: 1200px) {
    & li {
      padding-top: 24px;
      padding-bottom: 24px;
    }
  }
  @media screen and (min-width: 1310px) {
    padding-right: 80px;
    margin-right: 80px;
  }
`;

export const RightPrice = styled.ul`
  @media screen and (min-width: 768px) {
    & li:nth-of-type(n + 2) {
      padding-top: 35px;
      padding-bottom: 35px;
    }
  }
  @media screen and (min-width: 1200px) {
    & li:nth-of-type(n + 2) {
      padding-top: 24px;
      padding-bottom: 24px;
    }
  }
`;

export const Price = styled.p`
  color: var(--black, #242424);
  text-align: right;
  justify-content: end;
  font-size: 18px;
  flex: 1;
  font-weight: 600;
  line-height: normal;
`;

export const PriceItem = styled.li`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding-top: 51px;
    padding-bottom: 51px;
  }
  & p {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;
export const PriceContainer = styled.div`
  flex: 1;
`;
export const PriceItemTwo = styled.li`
  display: flex;
  padding: 13px 0 !important;
  & p {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

export const PriceInfo = styled.p`
  text-align: right;
  justify-content: end;
  font-size: 14px;

  font-weight: 400;
  line-height: normal;
`;

export const Text = styled.p`
  flex: 1;
  @media screen and (min-width: 768px) {
    flex: 2;
  }
  @media screen and (min-width: 1200px) {
    flex: 1;
  }
`;
