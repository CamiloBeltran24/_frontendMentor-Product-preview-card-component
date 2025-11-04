

import { ProductImage } from './ProductImage/ProductImage';
import { ProductInfo } from './ProductInfo/ProductInfo';
import styles from './PreviewCard.module.css';
import { useEffect, useState } from 'react';


export const PreviewCard = () => {

const [imageUrl, setImageUrl] = useState(() =>
    window.innerWidth >= 992
      ? '/images/image-product-desktop.jpg'
      : '/images/image-product-mobile.jpg'
  );

  useEffect(() => {
    function handleResize() {
      setImageUrl(
        window.innerWidth >= 992
          ? '/images/image-product-desktop.jpg'
          : '/images/image-product-mobile.jpg'
      );
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <>
        <article className={styles['preview-card']}>

            <ProductImage url={imageUrl} altText='image of Gabrielle Essence Eau De Parfum' />

            <ProductInfo />
        </article>
    </>
  )
}
