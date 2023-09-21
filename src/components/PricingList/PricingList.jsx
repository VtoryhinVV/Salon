import { PricingItem } from '../PricingItem/PricingItem';
import { PricingTwoColumn } from '../PricingTwoColumn/PricingTwoColumn';
import { Container } from '../shared/Container';
import {
  PricingSect,
  ConsultationItem,
  PricingTwoInOne,
  BotoxInfo,
  HyalaseInfo,
  HyalaseBox,
  AppoinmentBtn,
} from './PricingList.styled';

export const PricingList = () => {
  const botox = [
    { text: 'Botox', price: '$17 (price per unit)' },
    {
      text: 'Botox package 2 areas - frown and forehead (28 units)',
      price: '$400',
    },
    {
      text: 'Botox package 3 areas - frown, forehead and crows (46 units)',
      price: '$600',
    },
  ];

  const dysport = [
    { text: 'Dysport', price: '$6 (price per unit)' },
    {
      text: 'Dysport package 2 areas - frown and forehead (70 units)',
      price: '$400',
    },
    {
      text: 'Dysport package 3 areas - frown, forehead and crows (120 units)',
      price: '$600',
    },
  ];

  const botoxDysportAreas = {
    title: 'Botox / Dysport areas:',
    price1: [
      { text: 'Frown', price: 'from $240' },
      {
        text: 'Crows',
        price: 'from $240',
      },
      {
        text: 'Forehead',
        price: 'from $120',
      },
      {
        text: 'Puckered chin',
        price: 'from $100',
      },
      {
        text: 'Brow lift',
        price: 'from $120',
      },
    ],
    price2: [
      { text: 'Neck', price: 'from $240' },
      {
        text: 'Downturned mouth corners',
        price: 'from $120',
      },
      {
        text: 'Lip flip',
        price: '$80',
      },
      {
        text: 'Masseter (facial slimming / bruxism)',
        price: 'from $500',
      },
      {
        text: 'Hyperhidrosis (excessive sweating)',
        price: 'from $1000',
      },
    ],
  };

  const lipFiller = {
    title: 'Lip filler',
    price1: [
      { text: 'Lip filler 0.25ml (medium thickness)', price: '$280' },
      { text: 'Lip filler 0.5ml (medium thickness)', price: '$400' },
      { text: 'Lip filler 1ml (medium thickness)', price: '$600' },
    ],
    price2: [
      {
        text: 'Lip filler 1ml (thinner filler for hydration only)',
        price: '$600',
      },
      { text: 'Lip filler 1ml (thicker filler)', price: '$750' },
      { text: 'Hyalase (dissolving lip filler)', price: '$300' },
    ],
  };
  const cheeks = {
    title: 'Cheeks, chin and jaw filler',
    price1: [
      { text: '1 ML', price: '$750' },
      { text: '2 ML', price: '$1250' },
    ],
    price2: [
      { text: '3 ML', price: '$1800' },
      { text: '4 ML', price: '$2400' },
    ],
  };
  const tearTrough = {
    title: 'Tear trough (under eye filler)',
    price1: [{ text: '1 ML', price: '$800' }],
    price2: [{ text: 'Additional ml', price: '$700' }],
  };
  const fineLines = {
    title: 'Fine lines/ perioral lines',
    price1: [{ text: '1 ML', price: '$600' }],
    price2: [{ text: 'Additional ml', price: '$550' }],
  };
  const nasolabialFolds = {
    title: 'Nasolabial folds (smile lines) filler',
    price1: [{ text: '1 ML', price: '$700' }],
    price2: [{ text: 'Additional ml', price: '$500' }],
  };
  const marionetteLines = {
    title: 'Marionette lines',
    price1: [{ text: '1 ML', price: '$700' }],
    price2: [{ text: 'Additional ml', price: '$500' }],
  };
  const templeFiller = {
    title: 'Temple',
    price1: [{ text: '1 ML', price: '$800' }],
    price2: [{ text: 'Additional ml', price: '$700' }],
  };

  const hyalase = [{ text: 'Hyalase (filler dissolver)', price: '$300' }];
  return (
    <PricingSect>
      <Container>
        <h2>Pricing</h2>

        <ConsultationItem>
          <h3>Consultation:</h3>
          <ul>
            <PricingItem
              text="Consultation fee (redeemable if booked on the same day of the
              treatment)"
              price="$50"
            />
          </ul>
        </ConsultationItem>
        <PricingTwoInOne>
          <BotoxInfo>
            <h3>Botox:</h3>
            <ul>
              {botox.map((info, inx) => (
                <PricingItem text={info.text} price={info.price} key={inx} />
              ))}
            </ul>
          </BotoxInfo>
          <div>
            <h3>Dysport:</h3>
            <ul>
              {dysport.map((info, inx) => (
                <PricingItem text={info.text} price={info.price} key={inx} />
              ))}
            </ul>
          </div>
        </PricingTwoInOne>

        <PricingTwoColumn info={botoxDysportAreas} botox />
        <PricingTwoColumn info={lipFiller} lipFiller />
        <PricingTwoColumn info={cheeks} />
        <PricingTwoColumn info={tearTrough} />
        <PricingTwoColumn info={fineLines} />
        <PricingTwoColumn info={nasolabialFolds} />
        <PricingTwoColumn info={marionetteLines} />
        <PricingTwoColumn info={templeFiller} />
        <HyalaseBox>
          <HyalaseInfo>
            <h3>Hyalase (filler dissolver):</h3>

            <ul>
              {hyalase.map((info, inx) => (
                <PricingItem text={info.text} price={info.price} key={inx} />
              ))}
            </ul>
          </HyalaseInfo>
        </HyalaseBox>
        <AppoinmentBtn
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
        >
          Book appoinment
        </AppoinmentBtn>
      </Container>
    </PricingSect>
  );
};
