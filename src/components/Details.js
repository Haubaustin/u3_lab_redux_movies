import { LoadDetails } from "../store/actions/MovieActions"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"



const mapStateToProps = ({ detailState }) => {
    return { detailState }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchDetails: (id) => dispatch(LoadDetails(id))
    }
  }


  const Details = (props) => {
    const { id } = useParams()

    useEffect(() => {
        props.fetchDetails(id)
    },[])

    console.log(props.detailState)

    return (
        <div>
            <h1>{props.detailState.details.original_title} {props.detailState.details.release_date}</h1>
            <h4>{props.detailState.details.tagline}</h4>
            <img src={`https://image.tmdb.org/t/p/w500${props.detailState.details.poster_path}`} alt = ""/>
            <p>{props.detailState.details.runtime} Minutes</p>
            <p>{props.detailState.details.vote_average}/10</p>
            <p>{props.detailState.details.overview}</p>
        </div>
        )
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(Details)