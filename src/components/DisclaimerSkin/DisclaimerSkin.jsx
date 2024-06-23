import React from 'react';
import styled from '@emotion/styled';
import { Container } from '../shared/Container';

import svgImgs from '/src/assets/svg/symbol-defs.svg';
import {
  Content,
  DisclaimerSect,
  Title,
  TitleSvg,
  TitleText,
} from './DisclaimerSkin.styled';
export const DisclaimerSkin = () => {
  return (
    <DisclaimerSect>
      <Container>
        <Title
          data-aos="fade-down"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <TitleSvg>
            <use href={`${svgImgs}#icon-DisclaimerSkin`}></use>
          </TitleSvg>
          <TitleText>Disclaimer</TitleText>
        </Title>
        <Content
          data-aos="fade-up"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <p>
            Profhilo® containing low & high molecular weight hyaluronic acid, is
            a Class III Medical Device for the treatment of the face and body
            for contours redefinition and laxity remodelling where skin laxity
            is a problem.⁠ Profhilo® has risks and benefits.⁠ Do not use with
            treatments such as laser resurfacing or medium deep skin-peeling. Do
            not inject into inflamed areas or intravenously or intramuscularly.
            Possible side effects: pain and swelling at injection site.
            Accelagen Pty Ltd. Whanganui.
          </p>
          <p>
            RADIESSE® and RADIESSE® (+) <br />
            RADIESSE® and RADIESSE® (+) are dermal fillers that are used for
            smoothing moderate to severe facial wrinkles and folds, such as
            nasolabial folds (the creases that extend from the corner of your
            nose to the corner of your mouth). RADIESSE® is also used for
            correcting volume loss in the back of the hands.
          </p>
          <p>
            RADIESSE® and RADIESSE® (+) IMPORTANT SAFETY INFORMATION
            <br />
            Q: Who should not use RADIESSE® or RADIESSE® (+)?
            <br />
            A: You should not use RADIESSE® or RADIESSE® (+) if you have an
            allergy to any component of the product, if you have a history of
            severe allergies, if you have a bleeding disorder, or if you are
            pregnant or breastfeeding.
          </p>
          <p>
            You should not use RADIESSE® (+) if you have an allergy to lidocaine
            or medicines like it.
          </p>
          <p>
            Q: What is the most important information I should know about
            RADIESSE® and RADIESSE® (+)?
            <br />
            A: One of the risks with using these products is unintentional
            injection into a blood vessel. The chances of this happening are
            very small, but if it does happen, the complications can be serious,
            and may be permanent. These complications, which have been reported
            for facial injections, can include vision abnormalities, blindness,
            stroke, temporary scabs, or permanent scarring of the skin. If you
            have changes in your vision, signs of a stroke (including sudden
            difficulty speaking, numbness or weakness in your face, arms, or
            legs, difficulty walking, face drooping, severe headache, dizziness,
            or confusion), white appearance of the skin, or unusual pain during
            or shortly after treatment, you should notify your health care
            practitioner immediately.
          </p>
          <p>
            As with all procedures that involve an injection through the skin,
            there is a risk of infection.
          </p>
          <p>
            Do not use RADIESSE® or RADIESSE® (+) if you have a skin infection
            until it has healed.
            <br />
            It is not known if RADIESSE® or RADIESSE® (+) is safe or effective
            in the lips, or in the area around the eyes.
            <br />
            The microspheres in RADIESSE® and RADIESSE® (+) can be seen in
            X-rays and CT Scans. It is very important that you tell your health
            care provider that you have had RADIESSE® or RADIESSE® (+) dermal
            filler.
            <br />
            If you have a history of herpes, you may experience a herpes
            breakout after receiving RADIESSE® or RADIESSE® (+).
            <br />
            Injection in the back of the hand may result in temporary difficulty
            performing activities. RADIESSE® may cause nodules, bumps or lumps
            in the back of the hand and can last up to 1 year.
            <br />
            You should minimize strenuous activity and avoid extensive sun or
            heat exposure for about 24 hours after treatment and until any
            swelling or redness has resolved.
          </p>
          <p>
            Q: What should I tell my doctor before using RADIESSE® or RADIESSE®?
            <br />
            A: Tell your health care provider if you are taking blood thinners
            or medicines that can interfere with the clotting of blood, such as
            aspirin or warfarin. These medicines might make it more likely that
            you will experience bruising or bleeding at the injection site. Tell
            your health care provider if you have any diseases, injuries or
            disabilities of the hand, if you have a history forming large,
            raised scars or if you have had any other skin treatments such as
            skin peels.
          </p>
          <p>
            Q: What are the most common adverse events with RADIESSE® or
            RADIESSE®?
            <br />
            A: The most common adverse events seen in clinical studies of
            RADIESSE® used in the hands include bruising, redness, swelling,
            pain, itching, nodules or bumps/lumps, difficulty performing
            activities, loss of sensation and other local side effects. The most
            common adverse events seen in clinical studies of RADIESSE® or
            RADIESSE® (+) used in the face include bruising, redness, swelling,
            pain, itching and other local side effects.
          </p>
          <p>
            These are not all of the possible side effects with RADIESSE® or
            RADIESSE® (+). Merz collects information about adverse events seen
            with RADIESSE® and RADIESSE® (+) outside of clinical studies. These
            events are included in the RADIESSE® and RADIESSE® (+) Patient
            Information Guide based on an assessment of seriousness and
            potential causal relationship to RADIESSE® or RADIESSE® (+). Please
            see the Patient Information Guide available at{' '}
            <a href="www.radiesse.com">www.radiesse.com</a> for list of these
            events. Tell your health care provider about any side effects that
            bother you or do not go away.
          </p>
          <p>
            Important: For full safety information, please visit{' '}
            <a href="www.radiesse.com">www.Radiesse.com</a>
            <br />
            or call MyMerz Solutions at 1-844-469-6379
            <br />
            RADIESSE® and RADIESSE® (+) are available by prescription only.
          </p>
        </Content>
      </Container>
    </DisclaimerSect>
  );
};
