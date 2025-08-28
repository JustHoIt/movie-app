import { Component } from '../core/core'

interface State {
    [key: string]: unknown
    menus: {
        name: string
        href: string
    }[]
}

export default class TheHeader extends Component {
    public state!: State
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [{
                    name: 'Search',
                    href: '#/'
                },
                {
                    name: 'Movie',
                    href: '#/movie?id=tt32820897'
                },
                {
                    name: 'About',
                    href: '#/about'
                }
                ]
            }

        })

        window.addEventListener('popstate', () => {
            this.render()
        })
    }

    render() {
        this.el.innerHTML = /* html */ `
            <a 
                href="#/" 
                class="logo">
                <span>OMBdAPI</span>.COM
                </a>
                <nav>
                    <ul>
                        ${this.state.menus.map(menu => {
                            const href = menu.href.split('?')[0]
                            const hash = location.hash.split('?')[0]
                            const isActive = href === hash
                            return /* html */ `
                                <li>
                                    <a 
                                        class="${isActive ? 'active' : ''}" 
                                        href="${menu.href}">
                                        ${menu.name}
                                    </a>
                                </li>
                            `
                            }).join('')}
                    </ul>
                </nav>
                <a href="#/about" class="user">
                    <img src="https://github.com/JustHoIt/movie-app/blob/main/screenshoot/pe.png?raw=true" alt="User">
                </a>
        `
    }
}

