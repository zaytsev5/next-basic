import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Navigator(props){

    return (
        <div className={styles.navbar}>
            <div className={styles.item_navbar}>
                <Link href="/">Home</Link>
            </div>
            <div className={styles.item_navbar}>
                <Link href="/introduction">Introduction</Link>
            </div>
            <div className={styles.item_navbar}>
                <Link href="/users">Users</Link>
            </div>
            <div className={styles.item_navbar}>
                <Link href="/privacy">Privacy</Link>
            </div>

        </div>
    )
}   
