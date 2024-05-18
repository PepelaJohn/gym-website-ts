import NavBar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import Home from '@/scenes/Home'
import Explore from "./scenes/Explore";
import Classes from "./scenes/Classes";
import Contact from "./scenes/Contact";
function App() {
  const [selectedPage, setselectedPage] = useState<string>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setselectedPage("home");
      } else  {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="app bg-gray-20 ">
      <NavBar selectedPage={selectedPage} isTopOfPage={isTopOfPage} setSelectedPage={setselectedPage} />
      <Home setSelectedPage={setselectedPage}/>
      <Explore setSelectedPage={setselectedPage}/>
      <Classes/>
      <Contact setSelectedPage={setselectedPage}/>
    </main>
  );
}

export default App;
