import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { GalleryBox, Btn, TwoInOn } from './GalleryComponent.styled';

import svgImgs from '/symbol-defs.svg';

export const GalleryComponent = ({ gallary, three }) => {
  const items = [
    <img data-value="1" src={gallary[0]} key={1} />,
    <TwoInOn key={2}>
      <img data-value="2" src={gallary[1]} />
      <img data-value="3" src={gallary[2]} />
    </TwoInOn>,
    <img data-value="4" src={gallary[3]} key={4} />,
  ];

  const items3Img = [
    ...gallary.map((info, index) => (
      <img data-value="1" src={info} key={index} />
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
        items={three ? items3Img : items}
        controlsStrategy="alternate"
      />
    </GalleryBox>
  );
};
