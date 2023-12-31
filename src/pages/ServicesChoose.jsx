import { useParams } from 'react-router-dom';
import { Medical } from './Services/Medical';
import { InjectablesForMen } from './Services/InjectablesForMen';
import { LipFiller } from './Services/LipFiller';
import { AntiWrinkle } from './Services/AntiWrinkle';
import { DermalFiller } from './Services/DermalFiller';

export const ServicesChoose = () => {
  const { servicesChoose } = useParams();
  const choose = sect => {
    switch (sect) {
      case 'dermal_filler':
        return <DermalFiller />;
      case 'lip_filler':
        return <LipFiller />;
      case 'injectables_for_men':
        return <InjectablesForMen />;
      case 'medical':
        return <Medical />;
      case 'anti_wrinkle':
        return <AntiWrinkle />;
      default:
        return <></>;
    }
  };
  return <main>{choose(servicesChoose)}</main>;
};
