type Props = {
  Icon: JSX.Element ;
  heading: string;
  text: string;
};

const AdCard = ({ Icon, heading, text }: Props) => {
  return (
    <div className="flex flex-1 min-w-[300px] cursor-pointer hover:scale-105 easeInOut p-10 min-h-[300px] shadow-lg flex-col items-center justify-center rounded-lg border text-xs">
      <div className="h-10 w-10 overflow-hidden rounded-full bg-primary-100 flex items-center justify-center">
        {Icon  }
      </div>
      <h5 className="font-semibold text-sm">{heading}</h5>
      <p className="text-xs">{text}</p>

      <a className="text-primary-500 underline" href="#contactus">
        Learn More
      </a>
    </div>
  );
};

export default AdCard;
