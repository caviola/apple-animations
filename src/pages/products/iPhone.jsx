import React from 'react';
import ProductPage from '../../components/ProductPage';
import image from '../../images/iphone-big.png';
import image2xUrl from '../../images/iphone-big@2x.png';

function IPhone() {
  return (
    <ProductPage>
      <div className="pl-24">
        <div className="flex">
          <div className="w-7/12 bg-linear-to-r from-gray-100 to-transparent px-24 py-20">
            <div className="mb-4 text-3xl leading-tight font-bold text-red-500">iPhone</div>
            <div className="mb-16 text-8xl leading-none font-bold text-black">
              The ultimate <br />
              iPhone
            </div>
            <div className="text-2xl leading-relaxed text-gray-400">
              The future is here. Join the iPhone Upgrade <br />
              Program to get the latest iPhone - NOW!
            </div>
          </div>
          <div className="relative w-5/12">
            <img
              className="absolute"
              srcSet={`${image} 1x, ${image2xUrl} 2x`}
              src={image}
              alt="iPhone"
            />
          </div>
        </div>
        <div className="px-24 py-20">
          <div className="text-5xl font-bold text-gray-300">
            From $799
            <a href="#" className="mt-2 block text-xl font-semibold text-red-500 no-underline">
              Buy now&nbsp;&gt;
            </a>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}

export default IPhone;
