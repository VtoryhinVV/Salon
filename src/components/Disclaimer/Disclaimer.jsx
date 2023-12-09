import svgImgs from '/src/assets/svg/symbol-defs.svg';
import { Container } from '../shared/Container';
import { DisclaimerSection, Title, DisclaimerText } from './Disclaimer.styled';

export const Disclaimer = () => {
  return (
    <DisclaimerSection
      data-aos="fade-up"
      data-aos-mirror="false"
      data-aos-once="true"
    >
      <Container>
        <Title>
          <svg>
            <use href={`${svgImgs}#icon-alert-triangle`}></use>
          </svg>
          <h2>Disclaimer</h2>
        </Title>
        <DisclaimerText>
          Please take the time to read the Botulinum Toxin Type A page as this
          informs you of the contraindications and side-effects of these
          treatments. Botulinum Toxin is a medicine and must be treated as such,
          only to be injected by a Registered Medical Professional.All before
          and after photos on the Aesthetica website are genuine untouched
          photographs of our patients. Because results may vary from patient to
          patient the photos provide guidance only to the possible results. Your
          individual results may vary from those seen in the photographs for a
          variety of reasons. All before and after photographs are ©
          AestheticaDysport® is a prescription medicine containing Clostridium
          Botulinum Type A toxin complex for injection. It is used for the
          treatment of frown lines and excessive sweating. It should be
          administered only by trained medical professionals. Cautions: people
          with defective neuro-muscular transmission disorders, infection at
          site of injection, pregnancy and lactation. Possible side effects
          include headaches, pain, burning or redness at injection site, local
          muscle weakness including drooping eye lids, lack of feeling or nausea
          or compensatory sweating in other skin areas. Talk to your specialist
          about the benefits/risks of this procedure. A charge applies.Dysport®
          treatment lasts about four months and after this time further courses
          of treatment may be necessary. Speak to your specialist about your own
          situation.BOTOX is a prescription medicine containing 100 units of
          Clostridium Botulinum Type A toxin complex for injection. It is used
          for the treatment of severe frown lines and associated ‘crow’s feet’
          around the eyes. It should be administered only by trained medical
          professionals. Talk to your specialists about the benefits/risks of
          this procedure in appearance medicine. Cautions: people with
          neuro-muscular transmission disorders, presence of infection at site
          of injection, pregnancy and lactation. Possible side effects include
          headaches, pain, burning sensation or redness at injection site,
          temporary local muscle weakness including eyelid droop, decreased
          sensation and nausea. If you have side effects or concerns, talk to
          your doctor. A charge applies. Allergan Pharmaceutical, Auckland.
        </DisclaimerText>
      </Container>
    </DisclaimerSection>
  );
};
