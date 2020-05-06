import React from "react";
import ProductPage from "../../../common/ProductPage";
import { Link } from "react-router-dom";
import cx from "classnames";
import product from "../../../common/product.module.scss";
import iphone from "./styles.module.scss";
import image from "../../../images/iphone-big.png";
import image2xUrl from "../../../images/iphone-big@2x.png";

function IPhone() {
  return (
    <ProductPage>
      <div className={product.detailsContainer}>
        <div className={product.details}>
          <div className={cx(product.textContent, iphone.textContent)}>
            <div className={cx(product.name, iphone.name)}>iPhone</div>
            <div className={cx(product.title, iphone.title)}>
              The ultimate <br />
              iPhone
            </div>
            <div className={cx(product.description, iphone.description)}>
              The future is here. Join the iPhone Upgrade <br />
              Program to get the latest iPhone - NOW!
            </div>
          </div>
          <div className={product.image}>
            <img
              srcSet={`${image} 1x, ${image2xUrl} 2x`}
              src={image}
              alt="iPhone"
            />
          </div>
        </div>
        <div className={product.extra}>
          <div className={cx(product.price, iphone.price)}>
            From $799
            <Link to="">Buy now&nbsp;&gt;</Link>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}

export default IPhone;
