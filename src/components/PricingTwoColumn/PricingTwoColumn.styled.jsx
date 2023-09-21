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
      padding-top: ${props => (props.paddLip ? `32px` : '24px')};
      padding-bottom: ${props => (props.paddLip ? `32px` : '24px')};
    }
  }
  @media screen and (min-width: 1200px) {
    & li:nth-of-type(n + 2) {
      padding-top: 24px;
      padding-bottom: 24px;
    }
  }
`;
