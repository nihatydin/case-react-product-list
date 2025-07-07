import React, {useState} from "react";
import "./Product.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

function Product({product}) {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    {name: "Yellow Gold", key: "yellow", code: "#E6CA97"},
    {name: "White Gold", key: "white", code: "#D9D9D9"},
    {name: "Rose Gold", key: "rose", code: "#E1A4A9"},
  ];

  const selected = colors[selectedColor];
  const selectedImage = product.images[selected.key];

  // bu kısım daha da detaylandırılabilir ancak ben bu  şekilde bırakıyorum.
  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.25 && score % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="star full"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfStroke}
          className="star half"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStarEmpty}
          className="star empty"
        />
      );
    }

    return stars;
  };

  return (
    <div className="product-card">
      <img src={selectedImage} alt={product.name} className="product-image" />

      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price} USD</p>

      <div className="color-picker">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-circle ${
              selectedColor === index ? "selected" : ""
            }`}
            style={{backgroundColor: color.code}}
            onClick={() => setSelectedColor(index)}
          />
        ))}
      </div>

      <p className="product-color">{selected.name}</p>

      <div className="product-score">
        {renderStars(product.popularityScoreOutOf5)}
        <span className="score-text">{product.popularityScoreOutOf5}/5</span>
      </div>
    </div>
  );
}

export default Product;
