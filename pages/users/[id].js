import { useRouter } from 'next/router'
import  Link  from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'


export default function Car({user}) {

    const router = useRouter()
    const { id } = router.query
  
    return (
        <div className={styles.container}>
            <Head>
                <title>{user.name}</title>
            </Head>

            <main className={styles.card}>
                <h2 className={styles.title}>
                    {id}
                </h2>
                <h3 className={styles.user_name}>fullname: {user.name}</h3>
                <h4 className={styles.user_email}>email: {user.email}</h4>
                <h5 className={styles.user_phone}>phone: {user.phone}</h5>

                {/* <img src={car.image} width="300px" /> */}

            </main>
            <Link href="/users" className={styles.go_home}>go home</Link>
        </div>
    )
}

// export async function getServerSideProps({ params }) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//     const data = await res.json()
//     if(!Object.getOwnPropertyNames(data).length){
//         return {
//             notFound: true
//         }
//     }
//        return {
//         props: { user: data },
//     }

// }

 export async function getStaticProps({ params }) {
  
     const req = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
     const data = await req.json();
     return {
         props: { user: data },
     }
 }

 export async function getStaticPaths() {

     const req = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await req.json();

     const paths = data.map(user => {
         return { params: { id: user.id.toString() } }
     })

     return {
         paths,
         // any paths not returned by getStaticPaths will return to 404 not foud
         fallback: false
    };
}
