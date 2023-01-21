import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";

export const copyRight = {
  year: new Date().getFullYear(),
  name: "Kenii",
};

export const socials = [
  {
    name: "Linkedin",
    icon: <BsLinkedin />,
    link: "#",
  },
  {
    name: "Github",
    icon: <BsGithub />,
    link: "#",
  },
  {
    name: "CodePen",
    icon: <FaCodepen />,
    link: "#",
  },
  {
    name: "Twitter",
    icon: <BsTwitter />,
    link: "#",
  },
  {
    name: "Instagram",
    icon: <BsInstagram />,
    link: "#",
  },
];
