import AdCard from "@/components/AdCard";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
type Props = {
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
  };

const Explore = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="flex  h-auto overflow-hidde flex-col items-center gap-16  py-10  pt-24 "
    >
      <div className="flex max-w-[1300px]  max-md:p-[25px] flex-col gap-5">
        <h2 className="text-lg font-semibold uppercase">more than just gym</h2>
        <p className="w-5/6 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
        <div className="flex flex-wrap w-full gap-5">
          <AdCard
            Icon={<HomeModernIcon  className="h-6 w-6"/>}
            heading="State of the Art Facilities"
            text="Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
          />
          <AdCard
            Icon={<UserGroupIcon className="h-6 w-6"/>}
            heading="100's of Diverse Classes"
            text="Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
          />
          <AdCard
            Icon={<AcademicCapIcon className="h-6 w-6"/>}
            heading="Expert and Pro Trainers"
            text="
            Learn More
            
            Expert and Pro Trainers
            Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
          />
        </div>

        <div className="flex w-full mt-20 items-center max-md:flex-col  justify-center">
          <div className="flex-[0.4]">
            <img src={BenefitsPageGraphic} alt="" />
          </div>

          <div className="flex-[0.6] flex flex-col">
            <h5 className="text-3xl mb-5 font-semibold">
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </h5>

            <p className="mb-3">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              <br />
              <br />
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio. Fringilla a sed at suspendisse ut enim volutpat.
              Rhoncus vel est tellus quam porttitor. Mauris velit euismod
              elementum arcu neque facilisi. Amet semper tortor facilisis metus
              nibh. Rhoncus sit enim mattis odio in risus nunc
            </p>
            <ActionButton setSelectedPage={setSelectedPage} >Join Now</ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
