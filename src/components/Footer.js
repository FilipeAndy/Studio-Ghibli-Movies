import styles from './Footer.module.css';
import Link from 'next/link'

export default function Footer() {

    return(
        <footer className={styles.footer}>
            <Link href="/">
                <a>
                    <h1>Studio Ghibli Movies </h1>
                    </a>
            </Link>
        </footer>
    )
}