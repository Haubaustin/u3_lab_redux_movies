import Client from ".";

export const GetMovies = async () => {
    try {
      const res = await Client.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
      console.log(res.data.results)
      return res.data.results
    } catch (error) {
      throw error
    }
  }

  export const GetDetails = async (id) => {
    try {
      const res = await Client.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      console.log(res.data)
      console.log(id)
      console.log(res)
      return res.data
    } catch (error) {
      throw error
    }
  }
//   