import { BenefitsInclude } from '../../components/BenefitsInclude/BenefitsInclude';
import { HeroCommon } from '../../components/HeroCommon/HeroCommon';

import { ServicesGallary } from '../../components/ServicesGallary/ServicesGallary';

import photo1 from '/src/assets/img/lipFilter/img1.jpg';
import photo2 from '/src/assets/img/lipFilter/img2.jpg';
import photo3 from '/src/assets/img/lipFilter/img3.jpg';

const LipFiller = () => {
  const gallery = [photo1, photo2, photo3];

  const benefitsInfo = [
    {
      svgName: 'icon-lips',
      title: 'Lip Enhancement',
      descr:
        'Our lip filler treatments are designed to enhance your lips in various ways. Whether you\'re looking to increase volume, enhance the "cupid\'s bow," improve hydration, correct asymmetries, enhance lip borders, lift the corners, improve texture, or soften upper lip lines, our expert team is here to help you achieve your desired results.',
    },
    {
      svgName: 'icon-rateUp',
      title: 'Top-quality filler',
      descr:
        'The dermal fillers are made of hyaluronic acid, a naturally occurring substance found in our skin that is responsible for hydration and volume. We take pride in only using top-quality filler brands that are known for their safety and efficacy.',
    },
    {
      svgName: 'icon-headphone',
      title: 'Consultation',
      descr:
        'To ensure the best outcome for your lip filler treatment, we start with a thorough consultation. During this consultation, we will discuss your unique lip filler goals and examine your current lip shape. This allows us to determine the best technique and product suitable for you. Our experienced professionals will guide you through the entire process, answering any questions you may have and ensuring your comfort and satisfaction.',
    },
    {
      svgName: 'icon-team',
      title: 'Qualified team',
      descr:
        'At Aesthetica, we prioritize your safety and strive to provide you with exceptional results. Our team of skilled practitioners has extensive experience in lip filler treatments, and we stay up-to-date with the latest advancements in the field to offer you the best possible outcomes.',
    },
  ];
  return (
    <main>
      <HeroCommon
        title="Lip Filler"
        texts="At Aesthetica clinic, we offer top-quality injectable services to help you achieve the perfect pout. Lip filler is a highly sought-after cosmetic procedure globally, and for good reason."
        service={true}
      />
      <BenefitsInclude benefits={benefitsInfo} />
      <ServicesGallary imgGallery={gallery} bg threeImg />
    </main>
  );
};

export default LipFiller;
