const { GET_MOVIE } = require('../types')

const iState = {
  movies: [],
}

const MovieReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {...state, movies: action.payload}
        default:
            return { ...state }
    }
}

export default MovieReducer