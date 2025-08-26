import { Store } from '../core/core'

interface State {
    photo: string
    name: string
    email: string
    blog: string
    github: string
    repository: string
}

export default new Store<State>({
    photo: 'https://github.com/JustHoIt/core/blob/main/pe.png',
    name: 'JustHoIt / ParkHoMin',
    email: 'phm3128@naver.com',
    blog: '',
    github: 'https://github.com/JustHoIt',
    repository: 'https://github.com/JustHoIt/movie-app'
})