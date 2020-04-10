import React from 'react';
import { Link } from 'react-router-dom';
import ProductPage from '../../../common/ProductPage';
import './styles.scss';
import macbookpro from '../../../images/macbookpro-big.png';
import macbookpro2x from '../../../images/macbookpro-big@2x.png';

const MacBookPro = () => {
  return (
    <ProductPage>
      <div className="product-details-container product-details--macbook-pro">
        <div className="product-details">
          <div className="product-text">
            <div className="product-name">MacBook Pro</div>
            <div className="product-title">
              More power. <br />
              More pro
            </div>
            <ul className="product-description">
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
          <div className="product-image">
            <img srcSet={`${macbookpro} 1x, ${macbookpro2x} 2x`} src={macbookpro} alt="MacBook Pro" />
          </div>
        </div>
        <div className="product-extra">
          <div className="product-price">
            <Link to="">Buy now&nbsp;&gt;</Link>
          </div>
          <div className="mac-pictures"></div>
          <form className="mac-newsletter-form">
            <div className="form-title">
              Subscribe Now
            </div>
            <div className="form-content">
              <input placeholder="Enter the email address" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </ProductPage>
  );
}

export default MacBookPro;