import { Price, PriceItem, Text } from './PricingItem.styled';

export const PricingItem = ({ text, price }) => {
  return (
    <PriceItem>
      <Text>{text}</Text>
      <Price>{price}</Price>
    </PriceItem>
  );
};
