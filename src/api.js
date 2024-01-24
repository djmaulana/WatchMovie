import axios from "axios";

export const getMovies = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_sAPP_APIKEY}`);
    return response.data;
}