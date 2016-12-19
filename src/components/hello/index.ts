/**
 * Created by xiezj on 2016/12/19.
 */

import Vue = require("vue");
import {VueComponent} from "../../utils/decorators";

@VueComponent(require('./index.vue'),{

})
export class Hello extends Vue {
  msg: 'Welcome to Your Vue.js App'
}
