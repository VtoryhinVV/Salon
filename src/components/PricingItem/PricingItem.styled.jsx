import styled from '@emotion/styled';

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

  & p {
    display: flex;
    align-items: center;

    margin: 0;
  }
`;

export const Text = styled.p`
  flex: 1;
  @media screen and (min-width: 768px) {
    flex: 2;
  }
`;
