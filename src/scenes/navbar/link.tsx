
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Link = ({ selectedPage, page, setSelectedPage }: Props) => {
  const lowercasepage: string = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`text-primary-500 transition duration-500 hover:text-primary-300 ${
        selectedPage === lowercasepage ? "text-primary-300" : ""
      }`}
      href={`#${lowercasepage}`}
      onClick={() => {
        console.log(lowercasepage)
        setSelectedPage(lowercasepage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
