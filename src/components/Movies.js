import { LoadMovies } from "../store/actions/MovieActions"
import { connect } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const mapStateToProps = ({ movieState }) => {
    return { movieState }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchMovies: () => dispatch(LoadMovies())
    }
  }
  export let movie
  console.log(movie)

  const Movies = (props) => {
    

    useEffect(() => {
        props.fetchMovies()
    },[])

    return (
        <div>
            {props.movieState.movies && props.movieState.movies.map((movie) => (
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
                <Link to={`/movie/${movie.id}`}>
                <h3>{movie.original_title}</h3>
                </Link>
                <h6>{movie.release_date}</h6>
              </div> 
              ))}
        </div>

    )


}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)