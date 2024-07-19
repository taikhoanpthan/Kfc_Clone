import { Food } from "../../models/food";
import "./index.scss";
interface CardProps {
  food: Food;
}

function Card({ food }: CardProps) {
  const { name, description, image, price } = food;
  return (
    <div className="food-card">
      <img src={image} alt="" />
      <div className="content">
        <div className="food-card-mid">
          <span>{name}</span>
          <span>{price}</span>
        </div>
        <p className="description">
          {description.substring(0, 100)}
          {description.length > 100 && "..."}
        </p>
        <button>Thêm</button>
      </div>
    </div>
  );
}

export default Card;
