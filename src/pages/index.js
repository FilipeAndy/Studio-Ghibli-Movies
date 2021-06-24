import Link from 'next/link'
import styles from './Home.module.css';
export default function Home({movies}) {


  return (
    <div className={styles.container}>
    {movies && movies.map(movie => {
      return(
      
        <Link href={`movie/${movie.id}`}>
          <a>
          <div className={styles.card}>
            <div>{movie.title}</div>
            <div>{movie.original_title_romanised}</div>
          </div>
        </a>
        </Link>

      )
    })}
   </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://ghibliapi.herokuapp.com/films');
  const movies = await res.json();


  return {
    props: {
      movies
    },
    revalidate: 10
  }
}


