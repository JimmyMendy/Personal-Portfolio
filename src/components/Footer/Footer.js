import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <Slogan >
          Can we talk ?
        </Slogan>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>+44 7944961100</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>jimmymendy.dev@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            © {new Date().getFullYear()} jimmymendy.com. All Rights Reserved.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/JimmyMendy'>
          <AiFillGithub size='3rem' target='_blank' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jimmy-mendy-19883963/'>
          <AiFillLinkedin size='3rem' target='_blank' />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/JimmyMendy' target='_blank'>
          <AiFillTwitterCircle size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
