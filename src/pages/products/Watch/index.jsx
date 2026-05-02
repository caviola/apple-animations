import React from 'react';
import ProductPage from '../../../common/ProductPage';
import watch from './styles.module.scss';
import imageUrl from '../../../images/black-watch-big.png';
import image2xUrl from '../../../images/black-watch-big@2x.png';

function Watch() {
  return (
    <ProductPage>
      <div className="pl-24">
        <div className={`${watch.details} flex`}>
          <div className="w-7/12 bg-linear-to-r from-gray-100 to-transparent px-24 py-20">
            <div className="mb-4 text-3xl leading-tight font-bold text-pink-500">Apple Watch</div>
            <div className="mb-16 text-8xl leading-none font-bold text-black">
              Change starts <br />
              within.
            </div>
            <div className="text-2xl leading-relaxed text-gray-400">
              Apple Watch Series 4. Fundamentally redesigned and <br />
              re‑engineered to help you be even more active, <br />
              healthy, and connected.
            </div>
          </div>
          <div className="relative w-5/12">
            <img
              className="absolute top-16 w-full max-w-2xl"
              srcSet={`${imageUrl} 1x, ${image2xUrl} 2x`}
              src={imageUrl}
              alt="Watch"
            />
          </div>
        </div>
        <div className={`${watch.extra} px-24 py-20`}>
          <div className="text-5xl font-bold text-gray-300">
            From $799
            <a href="#" className="mt-2 block text-xl font-semibold text-pink-500 no-underline">
              Buy now&nbsp;&gt;
            </a>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}

export default Watch;
