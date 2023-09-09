import { HeroCommon } from '../../components/HeroCommon/HeroCommon';
import { InjectablesDescr } from '../../components/InjectablesDescr/InjectablesDescr';
import { InjectablesStigma } from '../../components/InjectablesStigma/InjectablesStigma';
import { ServicesGallary } from '../../components/ServicesGallary/ServicesGallary';

export const InjectablesForMen = () => {
  return (
    <main>
      <HeroCommon
        title="Injectables for Men"
        text="At Aesthetica clinic, we have an increasing amount of male clients wanting to look and feel their best. Our experienced team is trained in providing subtle and natural-looking results, ensuring that you still look like yourself, just more youthful and with less noticeable lines and wrinkles."
        service={true}
      />
      <InjectablesDescr />
      <InjectablesStigma />
      <ServicesGallary />
    </main>
  );
};
