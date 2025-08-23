import { Component } from '../core/core'
import Headline from '../components/HeadLine'

export default class Home extends Component {
    render() {
        const headline = new Headline().el
        
        this.el.classList.add('container')
        this.el.append(
            headline
        )
    }
}