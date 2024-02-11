type ButtonProp = {
  header: string;
  text: string;
};

export const TitleButton = ({ header, text }: ButtonProp) => {
  return (
    <div className="border border-white p-3 my-[3vh] inline-block md:inline">
      <h3>{header}</h3>
      <p className="md:hidden">{text}</p>
    </div>
  );
};
