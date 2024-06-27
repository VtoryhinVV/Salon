import { BenefitsInclude } from '../../components/BenefitsInclude/BenefitsInclude';
import { DisclaimerSkin } from '../../components/DisclaimerSkin/DisclaimerSkin';
import { Frequently } from '../../components/Frequently/Frequently';
import { HeroCommon } from '../../components/HeroCommon/HeroCommon';
import { Profhilo } from '../../components/Profhilo/Profhilo';
import { Radiesse } from '../../components/Radiesse/Radiesse';
import { MedicalGift } from '../../components/MedicalGift/MedicalGift';

export const SkinRejuvenation = () => {
  const textHero = [
    'Skin rejuvenation treatments are becoming very popular worldwide. Nowadays, skin health and appearance is extremely important. We move away from unnatural and fake appearance, moving towards more of a natural and effortless look. Therefore, our cosmetic injectable result priorities are becoming all about achieving a healthy, glowing and rejuvenated skin.',
  ];

  const benefitsInfo = [
    {
      svgName: 'icon-NaturalResults',
      title: 'Hydration & Glow',
      descr:
        'Achieve younger, hydrated, and healthy-looking skin with a luminous glow.',
    },
    {
      svgName: 'icon-ImprovedSkin',
      title: 'Improved Skin Quality',
      descr: 'Say goodbye to dehydrated, dull, and uneven skin texture.',
    },
    {
      svgName: 'icon-Hydration',
      title: 'Natural Results',
      descr:
        'Profhilo® offers completely natural-looking results, enhancing your beauty effortlessly.',
    },
    {
      svgName: 'icon-Reduction',
      title: 'Reduction of Fine Lines & Wrinkles',
      descr:
        'Experience smoother skin texture and a reduction in fine lines and wrinkles.',
    },
    {
      svgName: 'icon-MinimalDowntime',
      title: 'Minimal Downtime',
      descr: 'Enjoy the benefits of Profhilo® with minimal downtime.',
    },
  ];
  const benefitsInfo2 = [
    {
      svgName: 'icon-NaturalResults',
      title: 'Lift & Support',
      descr:
        'Radiesse® lifts and supports the skin, providing a firmer and more youthful appearance.',
    },
    {
      svgName: 'icon-ImprovedSkin',
      title: 'Improved Skin Quality',
      descr:
        'Radiesse® enhances the quality and health of your skin, promoting a radiant and youthful complexion',
    },
    {
      svgName: 'icon-Hydration',
      title: 'Natural Results',
      descr:
        'Enjoy long-lasting results with Radiesse® that look and feel completely natural, maintaining your youthful appearance for over two years.',
    },
    {
      svgName: 'icon-Safety',
      title: 'Safety & Non-Allergenic',
      descr:
        'Radiesse® is a safe, non-allergenic treatment made from materials naturally found in the body, ensuring minimal risk and high efficacy.',
    },
    {
      svgName: 'icon-Reduction',
      title: 'Wrinkle Reduction',
      descr:
        'By decreasing the appearance of folds and wrinkles, Radiesse® helps you achieve smoother and more rejuvenated skin.',
    },
    {
      svgName: 'icon-MinimalDowntime',
      title: 'Minimal Downtime',
      descr:
        'Experience minimal downtime with Radiesse®, allowing you to return to your daily activities with little interruption.',
    },
  ];

  return (
    <main>
      <HeroCommon
        title="Skin rejuvenation treatments"
        texts={textHero}
        service
        many
      />
      <Profhilo />
      <BenefitsInclude
        benefits={benefitsInfo}
        three
        gift
        title="Benefits of Profhilo®"
        btn="Book appointment"
      />
      <Radiesse />
      <BenefitsInclude
        benefits={benefitsInfo2}
        three
        gift
        title="Benefits of Radiesse®"
        btn="Book appointment"
      />
      <Frequently />
      <DisclaimerSkin />
      <MedicalGift back />
    </main>
  );
};
