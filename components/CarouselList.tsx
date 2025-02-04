import CarouselItem from "./CarouselItem";

const CarouselList = ({ items }: { items: [] }) => {
  return (
    <div className="">
      {items.map((item) => {
        return <CarouselItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CarouselList;
