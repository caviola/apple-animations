import React from "react";
import ProductPage from "../../../common/ProductPage";
import { Link } from "react-router-dom";
import "./styles.scss";
import blackwatch from "../../../images/black-watch-big.png";
import blackwatch2x from "../../../images/black-watch-big@2x.png";

const Watch = () => {
  return (
    <ProductPage>
      <div className="product-details-container product-details--watch">
        <div className="product-details">
          <div className="product-text">
            <div className="product-name">Apple Watch</div>
            <div className="product-title">
              Change starts <br />
              within.
            </div>
            <div className="product-description">
              Apple Watch Series 4. Fundamentally redesigned and <br />
              re‑engineered to help you be even more active, <br />
              healthy, and connected.
            </div>
          </div>
          <div className="product-image">
            <img
              srcSet={`${blackwatch} 1x, ${blackwatch2x} 2x`}
              src={blackwatch}
              alt="Watch"
            />
          </div>
        </div>
        <div className="product-extra">
          <div className="product-price">
            From $799
            <Link to="">Buy now&nbsp;&gt;</Link>
          </div>
        </div>
      </div>
    </ProductPage>
  );
};

export default Watch;
