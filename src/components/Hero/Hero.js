import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Jimmy<br/>
         a Front End Developer
      </SectionTitle>
      <SectionText>
        I'm a javaScript affionado proficent in front-end languages and libraries like HTML, JavaScript, CSS, React and Next.js.
      </SectionText>
      <Button>#OpenToWork</Button>
      {/* <Button onClick={() => window.location = 'https://google.com'}>#OpenToWork</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;