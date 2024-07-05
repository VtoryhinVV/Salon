import { HeroCommon } from '../../components/HeroCommon/HeroCommon';
import { InjectablesDescr } from '../../components/InjectablesDescr/InjectablesDescr';
import { InjectablesStigma } from '../../components/InjectablesStigma/InjectablesStigma';
import { ServicesGallary } from '../../components/ServicesGallary/ServicesGallary';

import photo1 from '/src/assets/img/InjectablesGl1.jpg';
import photo2 from '/src/assets/img/InjectablesGl2.jpg';
import photo3 from '/src/assets/img/InjectablesGl3.jpg';
import photo4 from '/src/assets/img/InjectablesGl4.jpg';

const InjectablesForMen = () => {
  const gallery = [photo1, photo2, photo3, photo4];
  return (
    <main>
      <HeroCommon
        title="Injectables for Men"
        texts="At Aesthetica clinic, we have an increasing amount of male clients wanting to look and feel their best. Our experienced team is trained in providing subtle and natural-looking results, ensuring that you still look like yourself, just more youthful and with less noticeable lines and wrinkles."
        service={true}
      />
      <InjectablesDescr />
      <InjectablesStigma />
      <ServicesGallary imgGallery={gallery} />
    </main>
  );
};

export default InjectablesForMen;
