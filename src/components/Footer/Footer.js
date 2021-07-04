import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const footerData = [
  { title: "Call", contactHref: "tel:+20 0114 8731 707", contact: "+20 0114 8731 707" },
  { title: "Email", contactHref: "mailto: mohamed.osama_94@yahoo.com", contact: " mohamed.osama_94@yahoo.com" }
]



const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          {footerData.map((elm, index) => (
            <>
              <LinkTitle>{elm.title}</LinkTitle>
              <LinkItem key={index} href={elm.contactHref}>{elm.contact}</LinkItem>
            </>
          ))}
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/MohamedOsamaAbdellah">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mohamed-osama94/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/________OSAMA">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
