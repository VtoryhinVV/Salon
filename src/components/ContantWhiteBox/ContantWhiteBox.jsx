import { BoxInfo, BoxInfoText, BoxInfoTitle } from './ContantWhiteBox.styled';

export const ContantWhiteBox = ({ title, text }) => {
  return (
    <BoxInfo>
      <BoxInfoTitle>{title}</BoxInfoTitle>
      <BoxInfoText>{text}</BoxInfoText>
    </BoxInfo>
  );
};
