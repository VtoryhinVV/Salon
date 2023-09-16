import { BenefitsInclude } from '../../components/BenefitsInclude/BenefitsInclude';
import { HeroCommon } from '../../components/HeroCommon/HeroCommon';

import { ServicesGallary } from '../../components/ServicesGallary/ServicesGallary';

import photo1 from '/src/assets/img/AntiWrinkle/img1.jpg';
import photo2 from '/src/assets/img/AntiWrinkle/img2.jpg';
import photo3 from '/src/assets/img/AntiWrinkle/img3.jpg';
import photo4 from '/src/assets/img/AntiWrinkle/img4.jpg';

export const AntiWrinkle = () => {
  const gallery = { img1: photo1, img2: photo2, img3: photo3, img4: photo4 };

  const benefitsInfo = [
    {
      svgName: 'icon-skin',
      title: 'Smooth and Youthful Skin',
      descr:
        'Botox & Dysport effectively smooth out fine lines and wrinkles, giving you a more youthful and rejuvenated appearance.',
    },
    {
      svgName: 'icon-non-surgery',
      title: 'Non-Invasive and Quick',
      descr:
        'These treatments are non-surgical and require minimal downtime. You can easily fit them into your busy schedule, as the procedure typically takes just a few minutes.',
    },
    {
      svgName: 'icon-infinit',
      title: 'Long-Lasting Results',
      descr:
        'Although results may vary for each individual, the effects of Botox and Dysport can last for several months. You can enjoy your smoother skin and diminished wrinkles for an extended period.',
    },
    {
      svgName: 'icon-prevent',
      title: 'Preventative Solution',
      descr:
        'Botox and Dysport not only treat existing wrinkles but also act as preventive measures against future lines. By relaxing the muscles responsible for facial expressions, these treatments can help delay the formation of new wrinkles.',
    },
    {
      svgName: 'icon-puzzle-piece',
      title: 'Customizable Treatments',
      descr:
        'Our experienced professionals will assess your unique needs and tailor the treatment specifically for you. This ensures that you receive personalized care and achieve the desired results.',
    },
    {
      svgName: 'icon-Group',
      title: 'Boost in Confidence',
      descr:
        'By reducing the appearance of wrinkles and restoring a more youthful look, Botox and Dysport can boost your self-confidence and improve your overall well-being.',
    },
  ];

  return (
    <main>
      <HeroCommon
        title="Anti Wrinkle & Wrinkle preventative"
        texts="Botox® and Dysport® are FDA-approved neuromodulators that are specially designed to target and minimize the appearance of wrinkles and fine lines. These treatments involve the injection of a purified protein into specific facial muscles, temporarily relaxing them and reducing the appearance of wrinkles caused by repetitive facial expressions."
        service={true}
      />
      <BenefitsInclude benefits={benefitsInfo} three gift />
      <ServicesGallary imgGallery={gallery} bg />
    </main>
  );
};
