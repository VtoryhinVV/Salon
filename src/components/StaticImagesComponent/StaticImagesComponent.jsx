import { StaticBlock, TwoInOne } from './StaticImagesComponent.styled';
// import img1 from '/src/assets/img/InjectablesGl1.jpg';
// import img2 from '/src/assets/img/InjectablesGl2.jpg';
// import img3 from '/src/assets/img/InjectablesGl3.jpg';
// import img4 from '/src/assets/img/InjectablesGl4.jpg';

export const StaticImagesComponent = ({ gallary }) => {
  const { img1, img2, img3, img4 } = gallary;
  return (
    <StaticBlock>
      <img src={img1} alt="Grapefruit slice atop a pile of other slices" />
      <TwoInOne>
        <img src={img2} alt="Grapefruit slice atop a pile of other slices" />
        <img src={img3} alt="Grapefruit slice atop a pile of other slices" />
      </TwoInOne>
      <img src={img4} alt="Grapefruit slice atop a pile of other slices" />
    </StaticBlock>
  );
};
