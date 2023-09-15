import { BenefitsInclude } from '../../components/BenefitsInclude/BenefitsInclude';
import { HeroCommon } from '../../components/HeroCommon/HeroCommon';

import { ServicesGallary } from '../../components/ServicesGallary/ServicesGallary';

import photo1 from '/src/assets/img/lipFilter/img1.jpg';
import photo2 from '/src/assets/img/lipFilter/img2.jpg';
import photo3 from '/src/assets/img/lipFilter/img3.jpg';
import photo4 from '/src/assets/img/lipFilter/img4.jpg';

export const LipFiller = () => {
  const gallery = { img1: photo1, img2: photo2, img3: photo3, img4: photo4 };
  return (
    <main>
      <HeroCommon
        title="Lip Filler"
        text="At Aesthetica clinic, we offer top-quality injectable services to help you achieve the perfect pout. Lip filler is a highly sought-after cosmetic procedure globally, and for good reason."
        service={true}
      />
      <BenefitsInclude />
      <ServicesGallary imgGallery={gallery} />
    </main>
  );
};
