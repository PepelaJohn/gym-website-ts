import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./link";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
// import useMediaQuery from "@/hooks/useMediaQuery";
type Props = {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
  isTopOfPage:boolean;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props): JSX.Element => {
  const flexBetween: string = "flex items-center justify-between";
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  //   const isAbove = useMediaQuery("(min-width: 1060px)")
  return (
    <nav >
      <div className={`fixed easeInOut top-0 z-30 ${flexBetween} w-full py-6 ${isTopOfPage ? "bg-transparent":"bg-primary-100"}`}>
        <div className={`${flexBetween} max-l:px-[25px] mx-auto flex-1  max-w-[1300px]`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            <div
              className={`flex w-full items-center  justify-between  max-md:hidden`}
            >
              <div className={`${flexBetween} gap-8   text-sm`}>
                <Link
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                  page="Home"
                />
                <Link
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                  page="Benefits"
                />
                <Link
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                  page="Classes"
                />
                <Link
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                  page="Contact us"
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <ActionButton
                  setSelectedPage={setSelectedPage}
          
                >
                  Become a member
                </ActionButton>
              </div>
            </div>
            <button
              className="block rounded-full bg-secondary-500 p-2 md:hidden"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      <aside
        className={`fixed bottom-0 top-0  z-50 hidden h-full w-[300px] flex-col bg-primary-100 gap-10 p-10 easeInOut items-center drop-shadow-sm max-md:flex ${
          menuToggle ? "right_0" : "right_200 "
        }`}
      >
        <button onClick={()=>setMenuToggle(false)} className="self-end">
          <XMarkIcon className="mb-10 h-6 w-6  text-gray-400" />
        </button>
        <Link
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          page="Home"
        />
        <Link
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          page="Benefits"
        />
        <Link
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          page="Classes"
        />
        <Link
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          page="Contact us"
        />
      </aside>
    </nav>
  );
};

export default NavBar;
