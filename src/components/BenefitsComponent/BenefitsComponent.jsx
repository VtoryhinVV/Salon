import { BenefitsItem } from './BenefitsComponent.styled';

import svgImgs from '/src/assets/svg/symbol-defs.svg';

export const BenefitsComponent = ({ svgName, title, descr }) => {
  return (
    <BenefitsItem>
      <svg>
        <use href={`${svgImgs}#${svgName}`}></use>
      </svg>
      <h3>{title}</h3>
      <p>{descr}</p>
    </BenefitsItem>
  );
};
