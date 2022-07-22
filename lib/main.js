import HelloWorld from './components/index.js'
const components = [HelloWorld]
const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}
export default {install,HelloWorld}
export {HelloWorld}
