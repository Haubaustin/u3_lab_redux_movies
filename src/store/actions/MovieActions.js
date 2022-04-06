import {
    GetMovies, GetDetails
} from "../../services/Movies"

import { GET_DETAILS, GET_MOVIE } from "../types"

export const LoadMovies = () => {

    return async (dispatch) => {
        try {
            const movies = await GetMovies()

            dispatch({
                type: GET_MOVIE,
                payload: movies
            })
        } catch (error) {
            throw error
        }
        }
    }

    export const LoadDetails = (id) => {

        return async (dispatch) => {
            try {
                const details = await GetDetails(id)
    
                dispatch({
                    type: GET_DETAILS,
                    payload: details
                })
            } catch (error) {
                throw error
            }
            }
        }
    
