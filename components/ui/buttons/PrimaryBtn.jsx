import Link from 'next/link'
import styles from './buttons.module.css'

function PrimaryBtn({src, title}) {
  return (
    <Link
        href={src}
        target={"_blank"}
        className={styles.primaryButton}
        download={true}
    >
        {title} 
    </Link>
  )
}

export default PrimaryBtn