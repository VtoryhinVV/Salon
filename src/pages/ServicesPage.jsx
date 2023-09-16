import { BuyGift } from '../components/BuyGift/BuyGift';
import { HeroCommon } from '../components/HeroCommon/HeroCommon';
import { Services } from '../components/Services/Services';

const ServicesPage = () => {
  return (
    <main>
      <HeroCommon
        title="Treatments & Services"
        texts="Indulge in our luxurious beauty services"
        buttonText="Book appoinment"
      />

      <Services back={false} />
      <BuyGift back={true} />
    </main>
  );
};

export default ServicesPage;
