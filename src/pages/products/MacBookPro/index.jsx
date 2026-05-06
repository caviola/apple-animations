import React from 'react';
import ProductPage from '../../../components/ProductPage';
import cx from 'classnames';
import macbook from './styles.module.scss';
import imageUrl from '../../../images/macbookpro-big.png';
import image2xUrl from '../../../images/macbookpro-big@2x.png';

function MacBookPro() {
  return (
    <ProductPage>
      <div className="pl-24">
        <div className="flex bg-black">
          <div className="w-7/12 px-24 py-20">
            <div className={cx(macbook.name, 'mb-4 text-3xl leading-tight font-bold text-sky-400')}>
              MacBook Pro
            </div>
            <div className={cx(macbook.title, 'mb-16 text-8xl leading-none font-bold text-white')}>
              More power. <br />
              More pro
            </div>
            <ul className={cx(macbook.description, 'm-0 list-none p-0 text-gray-500')}>
              <li className="inline-block text-5xl font-bold">
                8-core
                <small className="block text-xl font-normal">Intel processor</small>
              </li>
              <li className="ml-14 inline-block text-5xl font-bold">
                32GB
                <small className="block text-xl font-normal">32GB</small>
              </li>
            </ul>
          </div>
          <div className={cx(macbook.image, 'relative w-5/12')}>
            <img
              className="absolute top-16 -left-48 w-full max-w-4xl"
              srcSet={`${imageUrl} 1x, ${image2xUrl} 2x`}
              src={imageUrl}
              alt="MacBook Pro"
            />
          </div>
        </div>
        <div className="flex px-24 py-20 pr-0">
          <div className={cx(macbook.price, 'w-2/12 text-5xl font-bold text-gray-300')}>
            <a href="#" className="mt-2 block text-xl font-semibold text-sky-400 no-underline">
              Buy now&nbsp;&gt;
            </a>
          </div>
          <div className={cx(macbook.pictures, 'h-72 w-4/12')}></div>
          <form className={cx(macbook.form, 'relative -top-28 w-1/2 bg-gray-100 px-24 py-16')}>
            <div className="mb-5 text-4xl leading-tight font-bold text-black">Subscribe Now</div>
            <div className="flex">
              <input
                className="h-14 w-full border-0 bg-white px-10 text-sm"
                placeholder="Enter the email address"
                required
              />
              <button
                type="submit"
                className="ml-4 cursor-pointer border-0 bg-black px-10 text-sm leading-5 font-bold text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProductPage>
  );
}

export default MacBookPro;
