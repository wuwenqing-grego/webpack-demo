import './x.scss'
import './y.less'
import './z.styl'
export default 'hello'

import leaves from './leaves.jpeg'
const div = document.createElement('div')
div.innerHTML = `<img src="${leaves}">`
document.body.appendChild(div)

const button = document.createElement('button')
button.innerText = 'lazy load'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {})
}
document.body.appendChild(button)