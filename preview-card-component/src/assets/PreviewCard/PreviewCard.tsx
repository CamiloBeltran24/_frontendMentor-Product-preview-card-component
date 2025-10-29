import React from 'react'
import { Button } from './Button/Button'
import { ProductImage } from './ProductImage/ProductImage';
import { ProductInfo } from './ProductInfo/ProductInfo';
import styles from './PreviewCard.module.css'

export const PreviewCard = () => {
  return (
    <>
        <article className={styles['preview-card']}>

            <ProductImage url='../../../public/images/image-product-mobile.jpg' altText='image of Gabrielle Essence Eau De Parfum' />

            <ProductInfo />
        </article>
    </>
  )
}
