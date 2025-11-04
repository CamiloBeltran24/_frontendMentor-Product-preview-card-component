import styles from './ProductInfo.module.css';
import { Button } from '../Button/Button';

export const ProductInfo = () => {
  return (
    <div className={styles['product-info']}> 
        <span className={styles['product-info__prod']}>PERFUME</span>

        <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>

        <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className={styles.price}>
            <span className={styles.current}>$149.99</span>
            <span className={styles.oldPrice}>$169.99</span>
        </div>
        <Button label='Add to Cart' link='#'/>
    </div>
  )
}
