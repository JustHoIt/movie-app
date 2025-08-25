import { Component } from '../core/core'

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }

    render() {
        this.el.innerHTML = /* html */ `
            <div>
                <a href="https://github.com/JustHoIt/movie-app">
                    GitHub Repository
                </a>

            </div>
            <div>
                <a href="https://github.com/JustHoIt">
                    ${new Date().getFullYear()}
                    JustHoIt
                </a>
            </div>
        `
    }
}