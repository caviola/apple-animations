import React from "react";
import { ProductPage, styles } from "../../../common/ProductPage";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite/no-important";
import iphonePath from "../../../images/iphone-big.png";
import iphone2xPath from "../../../images/iphone-big@2x.png";

const iphone = StyleSheet.create({
  text: {
    background:
      "linear-gradient(90deg, #f2f2f2 0%, #ffffff00 100%) 0% 0% no-repeat",
  },

  name: {
    color: "#ff3b30",
  },

  title: {
    color: "black",
  },

  description: {
    color: "#999999",
  },

  link: {
    color: "#ff3b30",
  },
});

function IPhone() {
  return (
    <ProductPage>
      <div className={css(styles.page)}>
        <div className={css(styles.details)}>
          <div className={css(styles.text, iphone.text)}>
            <div className={css(styles.name, iphone.name)}>iPhone</div>
            <div className={css(styles.title, iphone.title)}>
              The ultimate <br />
              iPhone
            </div>
            <div className={css(styles.description, iphone.description)}>
              The future is here. Join the iPhone Upgrade <br />
              Program to get the latest iPhone - NOW!
            </div>
          </div>
          <div className={css(styles.imageContainer)}>
            <img
              className={css(styles.image)}
              srcSet={`${iphonePath} 1x, ${iphone2xPath} 2x`}
              src={iphone}
              alt="iPhone"
            />
          </div>
        </div>
        <div className={css(styles.extra)}>
          <div className={css(styles.price)}>
            From $799
            <Link to="" className={css(iphone.link)}>
              Buy now&nbsp;&gt;
            </Link>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}

export default IPhone;
