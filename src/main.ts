// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue = require('vue')
import {VueComponent} from "./utils/decorators";
import {Hello} from "./components/hello/index";
import {Viewer} from "./components/table/index";

let bootstrap = require('bootstrap-loader');
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
