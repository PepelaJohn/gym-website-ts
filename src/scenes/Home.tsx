import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      transition={{
        duration: 1.2,
        // ease: [0.6, 0.01, -0.05, 0.9],
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="home"
      className="flex min-h-[100vh] flex-col justify-center gap-16 overflow-hidden bg-gray-20 max-md:pt-24 "
    >
      <div className="flex h-[100vh] flex-col items-center">
        <div className="flex h-[80%] max-h-[80%] max-w-[1300px] items-center max-l:px-[25px] max-md:flex-col">
          <div className="flex flex-1 flex-col gap-10">
            <img src={HomePageText} alt="title" />
            <p>
              Unrivaled quality that will meet your exercise goals whether it is
              to add weight, loose weight, or keep physically fot.
            </p>

            <div className="flex items-center gap-10">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>

              <a className="text-red-300" href="#home">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img src={HomePageGraphic} alt="woman" />
          </div>
        </div>

        <div className="flex h-[20%] max-h-[20%] w-full flex-1 items-center justify-center bg-primary-100 ">
          <div className="flex w-full max-w-[1300px] gap-36 max-md:px-[25px]">
            <div className="easeInOut flex cursor-pointer items-center hover:scale-105">
              <img src={SponsorRedBull} alt="" />
            </div>
            <div className="easeInOut flex cursor-pointer items-center hover:scale-105">
              <img src={SponsorForbes} alt="" />
            </div>
            <div className="easeInOut flex cursor-pointer items-center hover:scale-105">
              <img src={SponsorFortune} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
