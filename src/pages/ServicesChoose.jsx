import { useParams } from 'react-router-dom';
import { Medical } from './Services/Medical';
import { InjectablesForMen } from './Services/InjectablesForMen';
import { LipFiller } from './Services/LipFiller';

export const ServicesChoose = () => {
  const { servicesChoose } = useParams();
  return (
    <main>
      {servicesChoose === 'dermal_filler' && <p>dermal_filler</p>}
      {servicesChoose === 'lip_filler' && <LipFiller />}
      {servicesChoose === 'injectables_for_men' && <InjectablesForMen />}
      {servicesChoose === 'medical' && <Medical />}
      {servicesChoose === 'anti_wrinkle' && <p>anti_wrinkle</p>}
    </main>
  );
};
