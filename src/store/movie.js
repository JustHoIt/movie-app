import { Store } from '../core/core'

///.env 파일에 omdb api key 등록
const API_KEY = process.env.API_KEY;

const store = new Store({
    searchText: '',
    page: 1,
    pageMax: 1,
    movies: []
})

export default store
export const searchMovies = async page => {
    store.state.page = page
    if (page === 1) {
        store.state.movies = []
    }
    const res = await fetch(`https://omdbapi.com?apikey=${API_KEY}&s=${store.state.searchText}&page=${page}`)
    const { Search, totalResults } = await res.json()
    store.state.movies = [
        ...store.state.movies,
        ...Search
    ]
    store.state.pageMax = Math.ceil(Number(totalResults) / 10)
}