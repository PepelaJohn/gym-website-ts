import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;

  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function ActionButton({ children,  setSelectedPage }: Props) {
  return (
    <AnchorLink href="#contactus" onClick={()=>setSelectedPage("contactus")} className="rounded-md bg-secondary-500 px-10 py-2 w-fit hover:bg-primary-500 hover:text-white">
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
