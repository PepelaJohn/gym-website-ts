import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="contactus"
      className="overflow-hidde  flex h-auto flex-col items-center gap-16  py-10  pt-24 "
    >
      <div className="flex max-w-[1300px]  flex-col gap-5 max-l:p-[25px]">
        <div className="flex w-5/6 flex-col">
          <h1 className="text-3xl font-semibold uppercase">
            <span className="text-primary-500">JOIN NOW </span>
            to get in shape
          </h1>
          <p>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </div>
        <div className="flex w-full items-start  gap-10 max-md:flex-col-reverse max-md:pb-14">
          <form className="flex w-full flex-1 flex-col gap-5" action="">
            <input
              className=" h-[60px]  flex-1 rounded-lg border-none bg-primary-500 p-3 font-normal capitalize text-white placeholder:text-white max-md:w-10/12 max-sm:w-full"
              type="text"
              placeholder="name"
            />
            <input
              className=" h-[60px]  flex-1 rounded-lg border-none bg-primary-500 p-3 font-normal capitalize text-white placeholder:text-white max-md:w-10/12 max-sm:w-full"
              type="email"
              placeholder="email"
            />
            <textarea
              className="  h-[150px]  flex-1 rounded-lg border-none bg-primary-500 p-3 font-normal capitalize  text-white placeholder:text-white max-md:w-10/12 max-sm:w-full"
              name=""
              id=""
              placeholder="message"
            ></textarea>

            <ActionButton setSelectedPage={setSelectedPage}>
              {" "}
              Submit{" "}
            </ActionButton>
          </form>
          <div className="flex flex-1 max-md:w-10/12 max-sm:w-full">
            <img className="w-[100%]" src={ContactUsPageGraphic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
