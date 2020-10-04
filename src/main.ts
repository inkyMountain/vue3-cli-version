import { createApp, h } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.config.isCustomElement = (tag) => {
  console.log('tag', tag);
  return false;
};

app.directive('xxx', {
  mounted(el, binding, vNode, preVNode) {
    console.log('el', el);
    console.log('binding', binding);
    console.log('vNode', vNode);
    console.log('preVNode', preVNode);
  }
});

app.component('runtime-component', {
  mounted() {
    console.log('runtime component mounted');
  },
  render() {
    return h('div', [
      h('div', ['runtime-component\'s chidren'])
    ]);
  }
});

app.mount('#app');

