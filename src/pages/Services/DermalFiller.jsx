import { HeroCommon } from '../../components/HeroCommon/HeroCommon';
import { Procedures } from '../../components/Procedures/Procedures';
import { ServicesGallary } from '../../components/ServicesGallary/ServicesGallary';

import photo1 from '/src/assets/img/DermalFiller/img1.jpg';
import photo2 from '/src/assets/img/DermalFiller/img2.jpg';

export const DermalFiller = () => {
  const gallery = [photo1, photo2];
  const textHero = [
    'Dermal filler - used to sculpt, enhance, replenish and shape the face.',
    'Dermal fillers are commonly used to smooth out wrinkles, add volume to areas of the face, enhance and contour facial features.',
    'These gel-like substances, made from hyaluronan, which is a complex chain of carbohydrates, are naturally found in our bodies. Hyaluronan, or hyaluronic acid, is responsible for maintaining the hydration, plumpness, and youthful look of our skin.',
    'Different formulations of dermal fillers are tailored for specific areas, allowing for precise correction of hollows or areas of shadowing, defining jawlines and chins, smoothing out fine lines, lifting cheeks, and enhancing lips.',
    'At Aesthetica, we are committed to providing only the highest quality and safest dermal fillers to our clients. We exclusively use premium dermal fillers that have been FDA approved, guaranteeing their efficacy and safety.',
    'To maintain the utmost level of client safety, we adhere to strict protocols and guidelines. Our team is highly trained and experienced, ensuring that every procedure is performed with precision and care. At Aesthetica, the well-being, satisfaction, and safety of our clients are our top priorities.',
  ];
  const infoProcedures = [
    {
      title: 'Cheeks',
      text: 'Cheek filler treatment is a non surgical procedure that gives your cheeks a fuller, more defined look. Benefits include defined and enhanced cheekbones, improved facial contour and symmetry, reduction of lines and wrinkles, hydrated skin, more youthful appearance, minimisation of jowls and nasolabial folds (smile lines) .',
    },
    {
      title: 'Lips',
      text: 'Lip filler is a popular injectable treatment that instantly improves the appearance of your lips.We can help you achieve your desired pout, whether you prefer a subtle enhancement or a more noticeable change. Lip filler benefits include enhanced volume, shape, and definition to the lips, reduced fine lines and wrinkles.',
    },
    {
      title: 'Chin',
      text: 'Chin filler treatment can add fullness to the chin, which can help to balance the facial structure and side profile. Benefits of the chin filler include improved facial structure and symmetry, strengthen and defined chin, improved jawline structure, more youthful appearance, minimisation of jowls and double chin .',
    },
    {
      title: 'Jaw',
      text: 'Jawline filler gives definition and structure to the lower part of the face. The dermal filler is used to contour the shape of the jawline. Benefits include - improved lower face structure, defined and contoured jawline, improved facial symmetry, more youthful appearance, reduced appearance of jowls.',
    },
    {
      title: 'Tear trough (Under eye filler)',
      text: 'Tear trough filler help to decrease the appearance of hollowness under the eyes, resulting in a less tired look under - eye area and a more confident self.',
    },
    {
      title: 'Nasolabial folds (Smile lines)',
      text: 'Nasolabial folds, those lines that extend from the sides of the nose to the corners of the mouth. Everyone has these wrinkles to some degree, however, nasolabial folds tend to become more pronounced as we age, deepening over time. Thankfully, the use of dermal fillers presents a viable solution to minimize the visibility of nasolabial folds. By opting for this treatment, individuals can enjoy a remarkable reduction in shadowing and sagging, ultimately resulting in a more youthful and rejuvenated appearance.',
    },
    {
      title: 'Marionette lines',
      text: 'Marionette lines, also known as oral commissure lines, are facial creases that extend from the corners of the mouth to the chin. These lines typically become more prominent as we age, giving the mouth a somewhat sad appearance. Fortunately, the appearance of these lines can be effectively diminished with the use of dermal fillers. By opting for this treatment, individuals can enjoy a range of benefits, such as lifted corners of the mouth, a more joyful and contented appearance, and an overall rejuvenated and youthful look.',
    },
    {
      title: 'Temple filler',
      text: 'As you age, the natural fat in your temple area diminishes, resulting in a "hollow" appearance. Fortunately, the temple filler treatment can effectively address this issue by replenishing lost volume and restoring a youthful fullness. By filling in these hollow areas, the dermal filler treatment not only enhances the temples but also lifts the tail of the eyebrows, further rejuvenating your overall look. If you\'re a suitable candidate, starting your injectables journey with temple filler can yield remarkable results, bringing back a youthful and refreshed appearance.',
    },
  ];
  return (
    <main>
      <HeroCommon title="Dermal filler" texts={textHero} service many />
      <Procedures textInfo={infoProcedures} />
      <ServicesGallary imgGallery={gallery} bg threeImg />
    </main>
  );
};
