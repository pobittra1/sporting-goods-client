import { TProduct } from "@/types";

function ProductCard(card: TProduct) {
  console.log("From this", card._id);
  return (
    <div>
      <div className="card-div-area">
        <p>{card.brand}</p>
      </div>
    </div>
  );
}

export default ProductCard;
