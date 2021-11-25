import React from 'react'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from '../../styles/GlobalComponents/Button';

const About = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main >About me</SectionTitle>
      <SectionText>
        Hello there! I'm glad you are taking time to hear my coding story <br/> <br/>
        
        I would love to tell you that I have been coding since I was 7, but my journey started in the summer of 2019, when I decided to throughly learn how to build cool stuff for the web. <br/> So far I really enjoy the fact that with the skills that acquired I can build anything from the ground up, this is a really satifying feeling. Right now I am ready to work for a company as front-end developer.
        <br/>
        <br/>
         When i'm not coding I'm probably running, working out, going out with my friends or simply relaxing at home. 
      </SectionText>
      {/* <Button><a download href={require("../../../public/images/bank.png")}>Download Resume</a></Button> */}
    </Section>
  )
}

export default About
