import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import "./ProductItem.css";

const ProductsItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem.id === productItem.id
  );

  return (
    <>
      <div className="product-item glide__slide glide__slide--active">
        <div className="product-image">
          <NavLink to={`productdetail/${productItem.id}`}>
            <img src={productItem.img.thumbs[0]} alt="" className="img1" />
            <img src={productItem.img.thumbs[1]} alt="" className="img2" />
          </NavLink>
        </div>
        <div className="product-info">
          <a href="$" className="product-title">
            {productItem.name}
          </a>
          <ul className="product-star">
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-half"></i>
            </li>
          </ul>
          <div className="product-prices">
            <strong className="new-price">
              ${productItem.price.newPrice.toFixed(2)}
            </strong>
            <span className="old-price">
              ${productItem.price.oldPrice.toFixed(2)}
            </span>
          </div>
          <span className="product-discount">-{productItem.discount}%</span>
          <div className="product-links">
            <button
              className="add-to-cart"
              onClick={() => {
                addToCart(productItem);
              }}
              disabled={filteredCart}
            >
              <i className="bi bi-basket-fill"></i>
            </button>
            <button>
              <i className="bi bi-heart-fill"></i>
            </button>
            <NavLink
              to={`productdetail/${productItem.id}`}
              className="product-link"
            >
              <i className="bi bi-eye-fill"></i>
            </NavLink>
            <a href="#">
              <i className="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;

ProductsItem.propTypes = {
  productItem: PropTypes.object,
  setCartItems: PropTypes.func,
};
