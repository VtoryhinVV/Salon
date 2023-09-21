import { PricingItem } from '../PricingItem/PricingItem';
import {
  LeftPrice,
  TwoColumnBlock,
  TwoColumnContent,
  RightPrice,
} from './PricingTwoColumn.styled';

export const PricingTwoColumn = ({
  info,
  botox = false,
  lipFiller = false,
}) => {
  const { title, price1, price2 } = info;
  return (
    <TwoColumnBlock>
      <h3>{title}</h3>
      <TwoColumnContent>
        <LeftPrice paddBotox={botox}>
          {price1.map((value, inx) => (
            <PricingItem text={value.text} price={value.price} key={inx} />
          ))}
        </LeftPrice>
        <RightPrice paddLip={lipFiller}>
          {price2.map((value, inx) => (
            <PricingItem text={value.text} price={value.price} key={inx} />
          ))}
        </RightPrice>
      </TwoColumnContent>
    </TwoColumnBlock>
  );
};
