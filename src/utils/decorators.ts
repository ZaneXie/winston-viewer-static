/**
 * Created by xiezj on 2016/12/17.
 */

import * as Vue from "vue";

// fixme: rely on vue-class-component 4.3.1, is not compatible with 4.4.0
import Component from "vue-class-component/lib/index";
import {VueClass} from "vue-class-component/lib/declarations";

/**
 * combine vue-loader with vue-class-component
 * @param obj vue-loader object, like require('./abc.vue')
 * @param option vue-class-component
 * @returns {(target:V)=>V}
 * @constructor
 */
export function VueComponent<U extends Vue>(obj, option: Vue.ComponentOptions<U>): <V extends VueClass>(target: V) => V {
  if (obj._scopeId) {
    let k = <any> option;
    k._scopeId = obj._scopeId;
  }
  option.render = obj.render;
  option.staticRenderFns = obj.staticRenderFns;
  return Component(option);
}
