

import { ProductImage } from './ProductImage/ProductImage';
import { ProductInfo } from './ProductInfo/ProductInfo';
import styles from './PreviewCard.module.css';

let imageUrl = '/images/image-product-mobile.jpg';

if( window.innerWidth >= 992 ){
  imageUrl = '/images/image-product-desktop.jpg'
}

export const PreviewCard = () => {
  return (
    <>
        <article className={styles['preview-card']}>

            <ProductImage url={imageUrl} altText='image of Gabrielle Essence Eau De Parfum' />

            <ProductInfo />
        </article>
    </>
  )
}
