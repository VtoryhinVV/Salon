import {
  MedicalGiftSection,
  MedicalGiftBtn,
  MedicalGiftTitle,
  MedicalGiftText,
} from './MedicalGift.styled';

export const MedicalGift = () => {
  return (
    <MedicalGiftSection>
      <MedicalGiftTitle
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        Spread the love with Aesthetica clinic Gift vouchers
      </MedicalGiftTitle>
      <MedicalGiftText
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        Treat your loved one with a perfect gift for any occasion.
      </MedicalGiftText>
      <MedicalGiftBtn
        href="https://bookings.gettimely.com/aesthetica7/purchase?uri=https%3A%2F%2Fbook.gettimely.com%2FGiftVoucher%2FDetails%2F193820%3FisMobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
      >
        BUY GIFT VOUCHER
      </MedicalGiftBtn>
    </MedicalGiftSection>
  );
};
