import { Container } from '../shared/Container';
import { KeyBenefitsItem, KeyBenefitsSect } from './KeyBenefits.styled';
import svgImgs from '/src/assets/svg/symbol-defs.svg';

export const KeyBenefits = ({ keys }) => {
  return (
    <KeyBenefitsSect>
      <Container>
        <h2 data-aos="fade-up" data-aos-mirror="false" data-aos-once="true">
          Key Benefits
        </h2>
        <ul data-aos="fade-up" data-aos-mirror="false" data-aos-once="true">
          {keys.map((key, index) => (
            <KeyBenefitsItem key={index}>
              <svg>
                <use href={`${svgImgs}#${key.svgName}`}></use>
              </svg>
              <h3>{key.title}</h3>
              <p>{key.descr}</p>
            </KeyBenefitsItem>
          ))}
        </ul>
      </Container>
    </KeyBenefitsSect>
  );
};
