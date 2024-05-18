import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
type Props = {};

const Classes = (props: Props) => {
  const imagesArray: string[] = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];
  return (
    <section
      id="classes"
      className="flex  flex-col items-center gap-16 pb-16 bg-primary-100   "
    >
      <div className="max-w-[1300px]  max-l:p-[25px]">
        {" "}
        <h3 className="my-5 text-3xl uppercase">Our classes</h3>
        <p>
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </div>

      <div className="scrollbar-styled flex gap-10  overflow-x-scroll">
        {imagesArray.map((image, i) => (
          <img key={i} width={400} src={image} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Classes;
