import { StaticBlock, TwoInOne } from './StaticImagesComponent.styled';
// import img1 from '/src/assets/img/InjectablesGl1.jpg';
// import img2 from '/src/assets/img/InjectablesGl2.jpg';
// import img3 from '/src/assets/img/InjectablesGl3.jpg';
// import img4 from '/src/assets/img/InjectablesGl4.jpg';

export const StaticImagesComponent = ({ gallary, three }) => {
  return (
    <StaticBlock>
      {three ? (
        gallary.map((info, index) => <img src={info} key={index} />)
      ) : (
        <>
          <img
            src={gallary[0]}
            alt="Grapefruit slice atop a pile of other slices"
          />
          <TwoInOne>
            <img
              src={gallary[1]}
              alt="Grapefruit slice atop a pile of other slices"
            />
            <img
              src={gallary[2]}
              alt="Grapefruit slice atop a pile of other slices"
            />
          </TwoInOne>
          <img
            src={gallary[3]}
            alt="Grapefruit slice atop a pile of other slices"
          />
        </>
      )}
    </StaticBlock>
  );
};
