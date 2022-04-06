const { GET_DETAILS } = require('../types')

const iState = {
  details: [],
}

const DetailReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {...state, details: action.payload}
        default:
            return { ...state }
    }
}

export default DetailReducer