import './x.scss'
import './y.less'
import './z.styl'
export default 'hello'

import leaves from './leaves.jpeg'
const div = document.createElement('div')
div.innerHTML = `<img src="${leaves}">`
document.body.appendChild(div)