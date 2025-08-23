import { Store } from '../core/core'

///.env 파일에 omdb api key 등록
const API_KEY = process.env.API_KEY;

const store = new Store({
    searchText: '',
    page: 1,
    movies: []
})


export default store
export const searchMovies = async page => {
    const res = await fetch(`https://omdbapi.com?apikey=${API_KEY}&s=${store.state.searchText}&page=${page}`)
    const json = await res.json()
    console.log(json)
}