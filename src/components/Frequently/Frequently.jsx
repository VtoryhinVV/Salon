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

export const Frequently = ({ data }) => {
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
        <p dangerouslySetInnerHTML={{ __html: answer }} />
      </Content>
    </ItemContainer>
  );
};
