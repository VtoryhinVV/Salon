import { HeroCommon } from '../../components/HeroCommon/HeroCommon';

export const SkinRejuvenation = () => {
  const textHero = [
    'Skin rejuvenation treatments are becoming very popular worldwide. Nowadays, skin health and appearance is extremely important. We move away from unnatural and fake appearance, moving towards more of a natural and effortless look. Therefore, our cosmetic injectable result priorities are becoming all about achieving a healthy, glowing and rejuvenated skin.',
  ];

  return (
    <main>
      <HeroCommon
        title="Skin rejuvenation treatments"
        texts={textHero}
        service
        many
      />
    </main>
  );
};
