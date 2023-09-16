import { useParams } from 'react-router-dom';
import { Medical } from './Services/Medical';
import { InjectablesForMen } from './Services/InjectablesForMen';
import { LipFiller } from './Services/LipFiller';
import { AntiWrinkle } from './Services/AntiWrinkle';
import { DermalFiller } from './Services/DermalFiller';

export const ServicesChoose = () => {
  const { servicesChoose } = useParams();
  return (
    <main>
      {servicesChoose === 'dermal_filler' && <DermalFiller />}
      {servicesChoose === 'lip_filler' && <LipFiller />}
      {servicesChoose === 'injectables_for_men' && <InjectablesForMen />}
      {servicesChoose === 'medical' && <Medical />}
      {servicesChoose === 'anti_wrinkle' && <AntiWrinkle />}
    </main>
  );
};
