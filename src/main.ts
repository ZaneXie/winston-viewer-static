// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue = require('vue')
import {VueComponent} from "./utils/decorators";
import {Hello} from "./components/hello/index";


@VueComponent(require('./App.vue'), {
  components: {
    Hello
  }
})
class App extends Vue {

}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
