import { BenefitsInclude } from '../components/BenefitsInclude/BenefitsInclude';
import { Frequently } from '../components/Frequently/Frequently';
import { HeroCommon } from '../components/HeroCommon/HeroCommon';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { MembershipOptions } from '../components/MembershipOptions/MembershipOptions';

const MembershipsPage = () => {
  const benefitsInfo = [
    {
      svgName: 'icon-Key1',
      title: 'Consistency',
      descr:
        'Our memberships ensure that you receive your treatments every 12 weeks, guaranteeing optimal results.',
    },
    {
      svgName: 'icon-Key2',
      title: 'Cost-Effective',
      descr:
        'Avoid the hassle of paying a lump sum upfront by opting for our affordable weekly payments starting at just $27.12. Once the 12-week payment period ends, your appointment costs are covered.',
    },
    {
      svgName: 'icon-Key3',
      title: 'Priority Booking',
      descr:
        'Secure your preferred appointment time by pre-booking in advance, tailored to your schedule.',
    },
    {
      svgName: 'icon-Key4',
      title: 'No Deposit',
      descr:
        'Say goodbye to upfront deposits when booking your treatment with our membership plan.',
    },
    {
      svgName: 'icon-Key5',
      title: 'Extra Perks',
      descr:
        'As a member, enjoy a 10% discount on all skincare products purchased at our clinic.',
    },
  ];
  const question = [
    {
      question: 'When can I get my first treatment?',
      answer: `You can receive the first treatment 12 weeks after you sign up for the membership and it has been paid out weekly.`,
    },
    {
      question:
        'What if I am due for treatment now but I would like to join the membership system?',
      answer:
        'You are more than welcome to pay for your treatment now and then start your membership fee weekly for your next treatment.',
    },
    {
      question: 'How much do the membership options cost?',
      answer: `One anti-wrinkle area membership costs $27.12 per week<br />Two anti-wrinkle areas membership costs $35.37 per week<br />Three anti-wrinkle areas membership costs $54.25 per week`,
    },
    {
      question: 'Can I choose what day the payment comes out?',
      answer:
        'The fee automatically comes out 2 days after you sign up for the membership. If you prefer a specific day then it can be adjusted by one of our friendly staff - please send us an email or come in the clinic for membership personalisation.',
    },
    {
      question: 'Can I choose to pay weekly or fortnightly?',
      answer:
        'Currently if you sign up for the membership, it will automatically be set up for weekly payments. However, if you prefer fortnightly payments, it can be adjusted by one of our friendly staff - please send us an email or come in the clinic for membership personalisation.',
    },
    {
      question: 'Can I receive the treatment 4 monthly instead of 3 monthly?',
      answer:
        'Yes, we can adjust the timeframe of receiving the treatments. Please send us an email or come in the clinic.',
    },
  ];
  return (
    <main>
      <HeroCommon
        title="Aesthetica clinic memberships"
        texts="Elevate Your Aesthetic Journey: Exclusive Benefits with Our Membership Plans"
        buttonText="Join Now"
        linkForButton="#"
      />
      <HowItWorks />
      <BenefitsInclude
        benefits={benefitsInfo}
        three
        gift
        bgImg
        title="Key Benefits"
        btn="Book appointment"
      />
      <MembershipOptions />
      <Frequently data={question} />
    </main>
  );
};

export default MembershipsPage;
