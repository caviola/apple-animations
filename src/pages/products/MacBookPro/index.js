import React from "react";
import { Link } from "react-router-dom";
import ProductPage from "../../../common/ProductPage";
import cx from "classnames";
import product from "../../../common/product.module.scss";
import macbook from "./styles.module.scss";
import imageUrl from "../../../images/macbookpro-big.png";
import image2xUrl from "../../../images/macbookpro-big@2x.png";

const MacBookPro = () => {
  return (
    <ProductPage>
      <div className={product.detailsContainer}>
        <div className={cx(product.details, macbook.details)}>
          <div className={product.textContent}>
            <div className={cx(product.name, macbook.name)}>MacBook Pro</div>
            <div className={cx(product.title, macbook.title)}>
              More power. <br />
              More pro
            </div>
            <ul className={cx(product.description, macbook.description)}>
              <li>
                8-core
                <small>Intel processor</small>
              </li>
              <li>
                32GB
                <small>32GB</small>
              </li>
            </ul>
          </div>
          <div className={cx(product.image, macbook.image)}>
            <img
              srcSet={`${imageUrl} 1x, ${image2xUrl} 2x`}
              src={imageUrl}
              alt="MacBook Pro"
            />
          </div>
        </div>
        <div className={cx(product.extra, macbook.extra)}>
          <div className={cx(product.price, macbook.price)}>
            <Link to="">Buy now&nbsp;&gt;</Link>
          </div>
          <div className={macbook.pictures}></div>
          <form className={macbook.form}>
            <div className={macbook.formTitle}>Subscribe Now</div>
            <div className={macbook.formContent}>
              <input placeholder="Enter the email address" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </ProductPage>
  );
};

export default MacBookPro;
