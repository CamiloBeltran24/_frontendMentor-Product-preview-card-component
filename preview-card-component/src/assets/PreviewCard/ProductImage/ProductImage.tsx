import styles from './ProductImage.module.css';

interface ProductImageProps {
    url: string,
    altText: string,
}

export const ProductImage = ({ url, altText } : ProductImageProps) => {
  return (
    <>
        <div className={styles['product-image']}>
            <figure>
                <img src={url} alt={altText} loading="lazy"/>
            </figure>
        </div>
    </>
  )
}
