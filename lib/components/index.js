import HelloWorld from './HelloWorld.vue';

/* istanbul ignore next */
HelloWorld.install = function(Vue) {
    Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
