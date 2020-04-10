import React from 'react';
import ProductPage from '../../../common/ProductPage';
import { Link } from 'react-router-dom';
import './styles.scss';
import iphone from '../../../images/iphone-big.png';
import iphone2x from '../../../images/iphone-big@2x.png';

const IPhone = () => {
  return (
    <ProductPage>
      <div className="product-details-container product-details--iphone">
        <div className="product-details">
          <div className="product-text">
            <div className="product-name">iPhone</div>
            <div className="product-title">
              The ultimate <br />
              iPhone
            </div>
            <div className="product-description">
              The future is here. Join the iPhone Upgrade <br />
              Program to get the latest iPhone - NOW!
            </div>
          </div>
          <div className="product-image">
            <img srcSet={`${iphone} 1x, ${iphone2x} 2x`} src={iphone} alt="iPhone" />
          </div>
        </div>
        <div className="product-extra">
          <div className="product-price">
            From $799
            <Link to="">Buy now&nbsp;&gt;</Link>
          </div>
        </div>
      </div>
    </ProductPage >
  );
}

export default IPhone;