import styles from './Button.module.css';

interface Button {
    label: string,
    link: string,
}

export const Button = ({ label, link } : Button) => {
  return (
    <>
        <a 
          href={link} 
          target="_blank" 
          className={styles.button}
          >

          <span className={styles.button__label}>{label}</span>
        </a>
    </>
  )
}
