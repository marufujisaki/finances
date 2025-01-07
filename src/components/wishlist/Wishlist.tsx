import { useState } from "react";
import "./Wishlist.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface WishlistItem {
  description: string;
  amount: number;
  checked: boolean;
}

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    { description: "New Phone", amount: 800, checked: false },
    { description: "Gaming Chair", amount: 200, checked: false },
    { description: "Headphones", amount: 150, checked: false },
    { description: "Vacation Fund", amount: 1000, checked: false },
  ]);

  const toggleCheck = (index: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <p className="wishlist-title"> WISHLIST </p>
        <FontAwesomeIcon className="add" icon={faCirclePlus} />
      </div>
      {wishlist.map((item, index) => (
        <div key={index} className="wish">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleCheck(index)}
          />
          <span>{item.description}</span>
          <span className="amount">${item.amount.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
