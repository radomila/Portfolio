import React from 'react';
import facebook from '../../icons/facebook.svg';
import githubSocial from '../../icons/github-social.svg';
import linkedin from '../../icons/linkedin.svg';

type LinkProps = {
  href: string;
  img: any;
  alt: string;
};

const SocialMediaLink = (link: LinkProps) => {
  return (
    <a href={link.href} rel="noreferrer" target="_blank">
      <img src={link.img} alt={link.alt} />
    </a>
  );
};

const SideNavbar = () => {
  return (
    <>
      <SocialMediaLink href="" img={facebook} alt="facebook-link" />
      <SocialMediaLink
        href="https://github.com/radomila?tab=repositories"
        img={githubSocial}
        alt="github-link"
      />
      <SocialMediaLink
        href="https://www.linkedin.com/in/radomila-hejhalov%C3%A116/"
        img={linkedin}
        alt="linkedin-link"
      />
    </>
  );
};

export default SideNavbar;
