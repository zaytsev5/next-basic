
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function UsersList({ users }) {
  return (
    <div className={styles.container}>
     <Head>
        <title> List of distributors</title>
     </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>
          Users list
        </h3>

        <ul>
          {
           users.map(user => (
            <main className={styles.card} key={user.id}>
                <h3 className={styles.user_name}>{user.name}</h3>
                <h4 className={styles.user_email}>{user.email}</h4>
               <Link className={styles.button_detail} href={`/users/${user.id}`}>more detail</Link>
            </main>
           ))
          }
        
          {/* <li>
            <Link href="/cars/ford"><a>Ford</a></Link>
          </li>
          <li>
            <Link href="/cars/lambo"><a>Lambo</a></Link>
          </li> */}
        </ul>
        </main>
    </div>
  )
  }
 export async function getStaticProps() {
  
     const req = await fetch(`https://jsonplaceholder.typicode.com/users`);
     const data = await req.json();
    //  console.log(data)
     return {
         props: { users: data },
     }
 } 
