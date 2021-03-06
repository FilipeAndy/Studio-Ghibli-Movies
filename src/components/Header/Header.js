import styles from './Header.module.css';
import Link from 'next/link'

export default function Header() {

    return(
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>Studio Ghibli Movies </h1>
                    </a>
            </Link>
        </header>
    )

}
