import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

function SimpleCard({ item }) {
  return (
    <div className="simple-card">
      <Image imageUrl={item.imageUrl} />

      <div className="simple-card-content">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}

export default SimpleCard;