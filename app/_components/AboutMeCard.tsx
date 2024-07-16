const AboutMeCard = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    content: string;
  };
}) => {
  return (
    <div className="flex text-center flex-col items-center">
      <h1 className="text-4xl text-emerald-500">0{data.id}.</h1>
      <h2 className="text-lg mb-4">{data.title}</h2>
      <p className="text-sm">{data.content}</p>
    </div>
  );
};

export default AboutMeCard;
