import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

   const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);


  const projectsLink = useRef('projects');
  const contactMeLink = useRef('contactme');


  const handleClick = (anchor) => () => {
    const id = `${ anchor.current }-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollUp = prevScrollPos > currentScrollPos;

    const translateY = scrollUp ? 0 : -200;
    setPrevScrollPos(currentScrollPos);
    setHeaderVisible(scrollUp);

    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.style.transform = `translateY(${translateY}px)`;
    }
  };

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <Box
      position="fixed"
      top={ 0 }
      left={ 0 }
      right={ 0 }
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      className={headerVisible ? 'header-show' : 'header-hide'}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={ 16 }
          py={ 4 }
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>

            <HStack spacing={ 8 }>
              { socials.map((social) => (
                <a key={ social.url } href={ social.url } target="_blank">
                  <FontAwesomeIcon icon={ social.icon } size='2x' />
                </a>
              )) }
            </HStack>

          </nav>
          <nav>
            <HStack spacing={ 8 }>
              <a href="#projects" onClick={ handleClick(projectsLink) } >
                Projects
              </a>
              <a href="#contactme" onClick={ handleClick(contactMeLink) } >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
