import React, { useState } from "react";
import "./ProductDetails.css";
import Review from "../Review";
import productData from "../../Data.json";
import Slider from "react-slick";
import PropTypes from "prop-types";

function NextBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
      style={{ zIndex: "2" }}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
      onClick={onClick}
      style={{ zIndex: "2" }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const ProductDetails = () => {
  const [isActive, setIsActive] = useState("blue-color");
  const [activeTab, setActiveTab] = useState("desc");
  const [activeImg, setactiveImg] = useState(productData[0].img.singleImage);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  const Tabs = (e, tabs) => {
    e.preventDefault();
    setActiveTab(tabs);
  };

  return (
    <React.Fragment>
      <section className="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            {/* <!-- breadcrumb start --> */}
            <div className="single-topbar">
              <nav className="breadcrumb">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Man</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                  <li>Basic Colored Sweatpants With Elastic Hems</li>
                </ul>
              </nav>
            </div>
            {/* <!-- breadcrumb end --> */}

            {/* <!-- site main start --> */}
            <div className="single-content">
              <main className="site-main">
                <div className="product-gallery">
                  <div className="single-image-wrapper">
                    <img src={`/${activeImg}`} id="single-image" alt="" />
                  </div>
                  <div className="product-thumb">
                    <div className="glide__track" data-glide-el="track">
                      <ol className="gallery-thumbs glide__slides">
                        <Slider {...settings}>
                          {productData[0].img.thumbs.map((itemImg, index) => (
                            <li
                              className="glide__slide glide__slide--active"
                              key={index}
                              onClick={() =>
                                setactiveImg({
                                  img: productData[0].img.thumbs[index],
                                  imgIndex: index,
                                })
                              }
                            >
                              <img
                                src={`/${itemImg}`}
                                alt=""
                                className={`img-fluid ${
                                  activeImg.imgIndex === index ? "active" : ""
                                } `}
                              />
                            </li>
                          ))}
                        </Slider>
                      </ol>
                    </div>
                    <div
                      className="glide__arrows"
                      data-glide-el="controls"
                    ></div>
                  </div>
                </div>
                <div className="product-info">
                  <h1 className="product-title">Ridley High Waist</h1>
                  <div className="product-review">
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
                    <span>2 reviews</span>
                  </div>
                  <div className="product-price">
                    <s className="old-price">$165</s>
                    <strong className="new-price">$100</strong>
                  </div>
                  <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <form className="variations-form">
                    <div className="variations">
                      <div className="colors">
                        <div className="colors-label">
                          <span>Color</span>
                        </div>
                        <div className="colors-wrapper">
                          <div
                            className={`color-wrapper ${
                              isActive === "blue-color" ? "active" : ""
                            }`}
                            onClick={() => {
                              setIsActive("blue-color");
                            }}
                          >
                            <label className="blue-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div
                            className={`color-wrapper ${
                              isActive === "red-color" ? "active" : ""
                            }`}
                            onClick={() => {
                              setIsActive("red-color");
                            }}
                          >
                            <label className="red-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div
                            className={`color-wrapper ${
                              isActive === "green-color" ? "active" : ""
                            }`}
                            onClick={() => {
                              setIsActive("green-color");
                            }}
                          >
                            <label className="green-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div
                            className={`color-wrapper ${
                              isActive === "purple-color" ? "active" : ""
                            }`}
                            onClick={() => {
                              setIsActive("purple-color");
                            }}
                          >
                            <label className="purple-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="values">
                        <div className="values-label">
                          <span>Size</span>
                        </div>
                        <div className="values-list">
                          <span className="active">XS</span>
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="cart-button">
                        <input
                          type="number"
                          defaultValue="1"
                          min="1"
                          id="quantity"
                        />
                        <button
                          className="btn btn-lg btn-primary"
                          id="add-to-cart"
                          type="button"
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="product-extra-buttons">
                        <a href="#">
                          <i className="bi bi-globe"></i>
                          <span>Size Guide</span>
                        </a>
                        <a href="#">
                          <i className="bi bi-heart"></i>
                          <span>Add to Wislist</span>
                        </a>
                        <a href="#">
                          <i className="bi bi-share"></i>
                          <span>Share this Product</span>
                        </a>
                      </div>
                    </div>
                  </form>
                  <div className="divider"></div>
                  <div className="product-meta">
                    <div className="product-sku">
                      <span>SKU:</span>
                      <strong>BE45VGRT</strong>
                    </div>
                    <div className="product-categories">
                      <span>Categories:</span>
                      <strong>Pants , Women</strong>
                    </div>
                    <div className="product-tags">
                      <span>Tags:</span>
                      <a href="#">black</a>,<a href="#">white</a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            {/* <!-- site main end --> */}

            {/* <!-- tabs start --> */}
            <div className="single-tabs">
              <ul className="tab-list">
                <li>
                  <a
                    href="#"
                    className={`tab-button ${
                      activeTab === "desc" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      Tabs(e, "desc");
                    }}
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`tab-button ${
                      activeTab === "info" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      Tabs(e, "info");
                    }}
                  >
                    Additional information
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`tab-button ${
                      activeTab === "reviews" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      Tabs(e, "reviews");
                    }}
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-panel">
                <div
                  className={`tab-panel-descriptions content ${
                    activeTab === "desc" ? "active" : ""
                  }`}
                >
                  <p>
                    Quisque varius diam vel metus mattis, id aliquam diam
                    rhoncus. Proin vitae magna in dui finibus malesuada et at
                    nulla. Morbi elit ex, viverra vitae ante vel, blandit
                    feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo
                    maximus a. Nullam ultricies sodales nunc, in pellentesque
                    lorem mattis quis. Cras imperdiet est in nunc tristique
                    lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a
                    tortor.
                  </p>
                  <br />
                  <p>
                    Quisque varius diam vel metus mattis, id aliquam diam
                    rhoncus. Proin vitae magna in dui finibus malesuada et at
                    nulla. Morbi elit ex, viverra vitae ante vel, blandit
                    feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo
                    maximus a. Nullam ultricies sodales nunc, in pellentesque
                    lorem mattis quis. Cras imperdiet est in nunc tristique
                    lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a
                    tortor.
                  </p>
                </div>
                <div
                  className={`tab-panel-information content ${
                    activeTab === "info" ? "active" : ""
                  }`}
                >
                  <h3>Additional information</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>Color</th>
                        <td>
                          <p>
                            Apple Red, Bio Blue, Sweet Orange, Blue, Green,
                            Pink, Black, White
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>Size</th>
                        <td>
                          <p>XXS, XS, S, M, L, XL, XXL</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Review
                  active={
                    activeTab === "reviews" ? "content active" : "content"
                  }
                />
              </div>
            </div>
            {/* <!-- tabs end --> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductDetails;
