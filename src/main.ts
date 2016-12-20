export interface IConfig {
  prefix?: string;
}
declare var __webpack_public_path__;

let conf: IConfig = window['winston-viewer-config'];
if (conf && conf.prefix) {
  let prefix = conf.prefix;
  if (prefix.charAt(prefix.length - 1) != "/") {
    prefix = prefix + "/";
  }
  __webpack_public_path__ = conf.prefix;
}

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue = require('vue')
import {VueComponent} from "./utils/decorators";
import {Hello} from "./components/hello/index";
import {Viewer} from "./components/table/index";
let bootstrap = require('bootstrap-loader');
let resource = require('vue-resource');
let AsyncComputed = require('vue-async-computed');
Vue.use(resource);
Vue.use(AsyncComputed);
// let jquery = require('jquery');
// let dataTables = require('datatables.net/js/jquery.dataTables');
// let dataTablesBootstrap = require('datatables.net-bs/js/dataTables.bootstrap.js');
// let dataTablesBootstrapCss = require('datatables.net-bs/css/dataTables.bootstrap.css');
@VueComponent(require('./App.vue'), {
  components: {
    Hello,
    Viewer
  }
})
class App extends Vue {

}
// window['vue-resource-callback'] = (http)=>{
//   http.options.root = "/log";
// }
let config = {
  el: '#app',
  template: '<App/>',
  components: {App},
}
if (conf && conf.prefix) {
  (<any>Vue).http.options.root = conf.prefix;
}
/* eslint-disable no-new */
new Vue(config);
