// @ts-ignore
import CssContainer from './index.css'

class LoadingElement extends HTMLElement {

    animaElement: HTMLDivElement

    constructor () {

        super()

        const shadow = this.attachShadow({mode: 'open'})
        const styleElement = document.createElement('style')
        styleElement.textContent = CssContainer.toString()
        shadow.appendChild(styleElement)

        const loadingElement = document.createElement('div')
        this.animaElement = loadingElement
        loadingElement.classList.add(CssContainer.locals.loading)
        shadow.appendChild(loadingElement)
    }

    close () {
        // 动画结束时移除本身
        this.animaElement.addEventListener('transitionend',  () => {
            this.parentElement?.removeChild(this)
        })
        this.animaElement.style.opacity = '0'
    }
}

customElements.define('loading-view', LoadingElement)