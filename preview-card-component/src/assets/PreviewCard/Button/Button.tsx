import styles from './Button.module.css';

interface Button {
    label: string,
}

export const Button = ({ label } : Button) => {
  return (
    <>
        <button  
          className={styles.button}
          >

          <span className={styles.button__label}>{label}</span>
        </button>
    </>
  )
}
