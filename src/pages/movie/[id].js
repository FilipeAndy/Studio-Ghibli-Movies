import styles from './Movie.module.css';

export default function Movie({movie}) {
    
    return(
        <div className={styles.container}>
        <div className={styles.movieInfo}>
            <div>
                <div>Tiltle</div>
                <div>{movie.title}</div>
            </div>
           
            <div>
                <div> Original Title</div>
                <div>{movie.original_title}</div>
            </div>

            <div>
                <div>Director</div>
                <div>{movie.director}</div>
            </div>
           

            <div>
                <div>Producer</div>
                <div>{movie.producer}</div>
            </div>
         

            <div>
                <div>Year</div>
                <div>{movie.release_date}</div>
            </div>
             
            <div>
                <div>Runnning Time</div>
                <div>{movie.running_time}</div>
            </div>

        </div>
        <div className={styles.description}>Description</div>
        <div className={styles.movieDescription}>
        {movie.description}
        </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://ghibliapi.herokuapp.com/films/${params.id}`)
    const movie = await res.json();
    
    
    return{
        props:{
            movie
        },
        revalidate: 10
    }
}