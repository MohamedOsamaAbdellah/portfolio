import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';




const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My Personal Portoflio
      </SectionTitle>
      <SectionText>
      I am <span style={{"font-weight":"800" }}> Mohamed Osama </span>, A Front end Developer with 2 years experience , having fun with React , Next.js and other cool front end stuff
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;