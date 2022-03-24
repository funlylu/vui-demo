import 'normalize.css'

const version = '0.1.0'
const components = [
 
]
const install = Vue => {
 if (install.installed) return
 components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue)
}
export {
 install,
 version,
 
}
export default {
 install,
 version,
 ...components
}
