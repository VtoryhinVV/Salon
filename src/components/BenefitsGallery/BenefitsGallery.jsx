import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { GalleryBox, Btn, Bc } from './BenefitsGallery.styled';

import svgImgs from '/symbol-defs.svg';
import { BenefitsComponent } from '../BenefitsComponent/BenefitsComponent';

export const BenefitsGallery = ({ infos }) => {
  const items = [
    ...infos.map((info, index) => (
      <Bc key={index}>
        <BenefitsComponent
          svgName={info.svgName}
          title={info.title}
          descr={info.descr}
        />
      </Bc>
    )),
  ];

  const renderPrevButton = () => {
    return (
      <Btn>
        <svg>
          <use href={`${svgImgs}#icon-chevron-left`}></use>
        </svg>
      </Btn>
    );
  };

  const renderNextButton = () => {
    return (
      <Btn>
        <svg>
          <use href={`${svgImgs}#icon-chevron-right`}></use>
        </svg>
      </Btn>
    );
  };

  return (
    <GalleryBox>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={500}
        animationType="fadeout"
        infinite
        disableDotsControls
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        mouseTracking
        items={items}
        controlsStrategy="alternate"
      />
    </GalleryBox>
  );
};
