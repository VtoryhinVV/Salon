import {
  GalleryImg,
  StaticBlock,
  TwoInOne,
} from './StaticImagesComponent.styled';
// import img1 from '/src/assets/img/InjectablesGl1.jpg';
// import img2 from '/src/assets/img/InjectablesGl2.jpg';
// import img3 from '/src/assets/img/InjectablesGl3.jpg';
// import img4 from '/src/assets/img/InjectablesGl4.jpg';

export const StaticImagesComponent = ({ gallary, three, two }) => {
  return (
    <StaticBlock>
      {three ? (
        gallary.map((info, index) => (
          <GalleryImg src={info} key={index} twoImg={two} />
        ))
      ) : (
        <>
          <GalleryImg
            src={gallary[0]}
            alt="Grapefruit slice atop a pile of other slices"
          />
          <TwoInOne>
            <GalleryImg
              src={gallary[1]}
              alt="Grapefruit slice atop a pile of other slices"
            />
            <GalleryImg
              src={gallary[2]}
              alt="Grapefruit slice atop a pile of other slices"
            />
          </TwoInOne>
          <GalleryImg
            src={gallary[3]}
            alt="Grapefruit slice atop a pile of other slices"
          />
        </>
      )}
    </StaticBlock>
  );
};
