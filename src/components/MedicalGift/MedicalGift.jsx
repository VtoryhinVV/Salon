import {
  MedicalGiftSection,
  MedicalGiftBtn,
  MedicalGiftTitle,
  MedicalGiftText,
} from './MedicalGift.styled';

export const MedicalGift = ({ back = false }) => {
  return (
    <MedicalGiftSection bg={back}>
      <div data-aos="fade-up" data-aos-mirror="false" data-aos-once="true">
        <MedicalGiftTitle>
          Spread the love with Aesthetica clinic Gift vouchers
        </MedicalGiftTitle>
        <MedicalGiftText>
          Treat your loved one with a perfect gift for any occasion.
        </MedicalGiftText>
        <MedicalGiftBtn
          href="https://bookings.gettimely.com/aesthetica7/purchase?uri=https%3A%2F%2Fbook.gettimely.com%2FGiftVoucher%2FDetails%2F193820%3FisMobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
          target="_blank"
          rel="noreferrer"
        >
          BUY GIFT VOUCHER
        </MedicalGiftBtn>
      </div>
    </MedicalGiftSection>
  );
};
