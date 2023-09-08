import { useParams } from 'react-router-dom';
import Medical from './Services/Medical';

export const ServicesChoose = () => {
  const { servicesChoose } = useParams();
  return (
    <main>
      {servicesChoose === 'dermal_filler' && <p>dermal_filler</p>}
      {servicesChoose === 'lip_filler' && <p>lip_filler</p>}
      {servicesChoose === 'injectables_for_men' && <p>injectables_for_men</p>}
      {servicesChoose === 'medical' && <Medical />}
      {servicesChoose === 'anti_wrinkle' && <p>anti_wrinkle</p>}
    </main>
  );
};
