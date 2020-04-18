import React from "react";
import ProductPage from "../../../common/ProductPage";
import { Link } from "react-router-dom";
import cx from "classnames";
import product from "../../../common/product.module.scss";
import watch from "./styles.module.scss";
import imageUrl from "../../../images/black-watch-big.png";
import image2xUrl from "../../../images/black-watch-big@2x.png";

const Watch = () => {
  return (
    <ProductPage>
      <div className={product.detailsContainer}>
        <div className={cx(product.details, watch.details)}>
          <div className={product.textContent}>
            <div className={cx(product.name, watch.name)}>Apple Watch</div>
            <div className={cx(product.title, watch.title)}>
              Change starts <br />
              within.
            </div>
            <div className={cx(product.description, watch.description)}>
              Apple Watch Series 4. Fundamentally redesigned and <br />
              re‑engineered to help you be even more active, <br />
              healthy, and connected.
            </div>
          </div>
          <div className={cx(product.image, watch.image)}>
            <img
              srcSet={`${imageUrl} 1x, ${image2xUrl} 2x`}
              src={imageUrl}
              alt="Watch"
            />
          </div>
        </div>
        <div className={cx(product.extra, watch.extra)}>
          <div className={cx(product.price, watch.price)}>
            From $799
            <Link to="">Buy now&nbsp;&gt;</Link>
          </div>
        </div>
      </div>
    </ProductPage>
  );
};

export default Watch;
