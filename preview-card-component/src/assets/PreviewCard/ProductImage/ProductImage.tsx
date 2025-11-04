import styles from './ProductImage.module.css';

interface ProductImageProps {
    url: string,
    altText: string,
}

export const ProductImage = ({ url, altText } : ProductImageProps) => {
  return (
    <>
        <div className={styles['poduct-image']}>
            <figure>
                <img src={url} alt={altText} loading="lazy"/>
            </figure>
        </div>
    </>
  )
}
