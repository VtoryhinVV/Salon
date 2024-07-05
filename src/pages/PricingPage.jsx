import { Disclaimer } from '../components/Disclaimer/Disclaimer';
import { PricingList } from '../components/PricingList/PricingList';
import { MedicalGift } from '../components/MedicalGift/MedicalGift';

const PricingPage = () => {
  return (
    <main>
      <PricingList />
      <Disclaimer />
      <MedicalGift back />
    </main>
  );
};

export default PricingPage;
