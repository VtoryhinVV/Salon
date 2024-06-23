import { useState } from 'react';
import { Container } from '../shared/Container';
import {
  Accordion,
  Arrow,
  Button,
  ContactLink,
  Content,
  FrequentTitle,
  FrequentlySect,
  ItemContainer,
} from './Frequently.styled';
import svgImgs from '/src/assets/svg/symbol-defs.svg';

export const Frequently = () => {
  const data = [
    {
      question: 'How much does Profhilo cost?',
      answer: `The price for 1 syringe (2ml) is $800. This is enough for one area for eg Face Or Neck. 
       The package for Face and Neck area x1 treatment is $1450.`,
    },
    {
      question: 'Is there a downside to Profhilo?',
      answer:
        'Profhilo is typically considered a safe treatment, however, just like any other cosmetic procedure, there are potential side effects. These can include: redness, swelling, bruising and mild discomfort at the injection site. These symptoms pass quickly, within a day to few days time.',
    },
    {
      question: 'How long does Radiesse last?',
      answer:
        'Radiesse is a long-lasting dermal filler. The results of this injection last up to 2 years.',
    },
    {
      question: 'Does Radiesse look natural?',
      answer:
        'You can expect natural-looking, long-lasting, and effective results when you receive Radiesse treatment. The result is natural due to the product stimulating your body to renew itself on its own by producing more collagen.',
    },
  ];
  return (
    <FrequentlySect>
      <Container>
        <FrequentTitle
          data-aos="fade-right"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>Frequently Asked Questions</h2>
          <p>
            If you're unable to find the answer you seek, please feel free to
            reach out to us through our{' '}
            <ContactLink to="/contact_us">contact us</ContactLink> form. We're
            here to assist you!
          </p>
        </FrequentTitle>
        <Accordion
          data-aos="fade-left"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion>
      </Container>
    </FrequentlySect>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ItemContainer>
      <Button onClick={toggleOpen}>
        {question}
        <Arrow isOpen={isOpen}>
          <svg>
            <use href={`${svgImgs}#icon-arrow`}></use>
          </svg>
        </Arrow>
      </Button>
      <Content isOpen={isOpen}>
        <p>{answer}</p>
      </Content>
    </ItemContainer>
  );
};
