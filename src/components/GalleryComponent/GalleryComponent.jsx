import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { GalleryBox, Btn, TwoInOn } from './GalleryComponent.styled';

import svgImgs from '/symbol-defs.svg';

export const GalleryComponent = ({ gallary }) => {
  const { img1, img2, img3, img4 } = gallary;
  const items = [
    <img data-value="1" src={img1} key={1} />,
    <TwoInOn key={2}>
      <img data-value="2" src={img2} />
      <img data-value="3" src={img3} />
    </TwoInOn>,

    <img data-value="4" src={img4} key={4} />,
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
