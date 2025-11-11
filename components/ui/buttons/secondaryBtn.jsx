import Link from 'next/link'
import styles from './buttons.module.css'

function SecondaryBtn({src, title}) {
  return (
    <Link
        href={src}
        target={"_blank"}
        className={styles.secondaryButton}
        download={true}
    >
        {title} 
    </Link>
  )
}

export default SecondaryBtn