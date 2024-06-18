import {
  LeftPrice,
  TwoColumnBlock,
  TwoColumnContent,
  RightPrice,
  PriceItem,
  Text,
  Price,
  PriceInfo,
  PriceItemTwo,
  PriceContainer,
} from './NewPrice.styled';

export const NewPrice = ({ botox = false, lipFiller = false }) => {
  return (
    <TwoColumnBlock
      data-aos="fade-up"
      data-aos-mirror="false"
      data-aos-once="true"
    >
      <h3>Skin rejuvenation</h3>
      <TwoColumnContent>
        <LeftPrice paddBotox={botox}>
          <PriceItemTwo>
            <Text>
              Profhilo face&nbsp;<b>OR</b>&nbsp;neck
            </Text>
            <PriceContainer>
              <Price>$800 per treatment</Price>
              <PriceInfo>2 treatments 4 weeks apart required</PriceInfo>
            </PriceContainer>
          </PriceItemTwo>
          <PriceItem>
            <Text>
              Profhilo face&nbsp;<b>&</b>&nbsp;neck
            </Text>
            <Price>$1450 per treatment</Price>
          </PriceItem>
        </LeftPrice>
        <RightPrice paddLip={lipFiller}>
          <PriceItem>
            <Text>Radiesse 1.5ml</Text>
            <Price>$850</Price>
          </PriceItem>
          <PriceItem>
            <Text>Radiesse 3ml</Text>
            <Price>$1600</Price>
          </PriceItem>
        </RightPrice>
      </TwoColumnContent>
    </TwoColumnBlock>
  );
};
