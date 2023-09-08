import { HeroCommon } from '../../components/HeroCommon/HeroCommon';
import { MedicalDescr } from '../../components/MedicalDescr/MedicalDescr';

const Medical = () => {
  return (
    <main>
      <HeroCommon
        title="Medical Botox Services for Hyperhidrosis, Teeth Grinding, and Headaches"
        text="Botulinium Toxi A - Botox/Dysport is not only known for its remarkable anti-wrinkle effects but is also widely used for the treatment of various medical conditions. Our experienced team is dedicated to providing safe and effective Botox solutions, including treatments for hyperhidrosis, teeth grinding, and headaches."
        buttonText="Book appoinment"
        service={true}
      />
      <MedicalDescr />
    </main>
  );
};

export default Medical;
