/**
 * Created by xiezj on 2016/12/19.
 */

import Vue = require("vue");
// var $ = require('jquery');
import {VueComponent} from "../../utils/decorators";
let jsonFormatter = require('json-formatter-js');
function encodeQueryData(data) {
  let ret: string[] = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}

Vue.directive('json', function (el, binding, vnode) {
  let k = new jsonFormatter(binding.value);
  while (true) {
    let child = el.firstChild;
    if (child) {
      el.removeChild(child);
    } else {
      break;
    }
  }
  el.appendChild(k.render());
});

@VueComponent(require('./index.vue'), {
  asyncComputed: {
    current() {
      let option = {};
      option['name'] = this.currentLogger;
      option['start'] = this.currentPage * this.pageSize;
      option['limit'] = this.pageSize;
      option['order'] = 'asc';


      return (<any>this).$http.get('query?' + encodeQueryData(option)).then((response) => {
        let res = JSON.parse(response.body);
        let data: any[] = [];
        for (let name in res) {
          let origin = res[name];
          let transed: any[] = [];
          for (let k of origin) {
            let trans = {
              name:name,
              timestamp: k.timestamp,
              message: k.message,
              level:k.level
            };
            delete k['timestamp']
            delete k['message']

            trans['meta'] = k;
            trans['xxx'] = "<span>333</span>"
            transed.push(trans);
          }

          data = data.concat(transed);
        }
        return data;
      });
    }
  },
  filters: {
    cutMessage(message){
      return message.slice(0, 50);
    }
  }
})
export class Viewer extends Vue {
  all = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
  ];
  pageSize: number = 10;
  totalPage: number = 100;

  currentPage: number = 0;
  loggers: string[] = [];
  currentLogger: string = 'Select logger';
  private http;

  mounted() {
    this.http = (<any>this).$http;
    this.http.get('loggers').then((response) => {
      this.loggers = JSON.parse(response.body);
    })
  }

  changeLogger(logger) {
    this.currentLogger = logger;
  }

  gotoPage(page) {
    if (page < 0 || page >= this.totalPage) {
      return;
    }
    this.currentPage = page;
  }

  nextPage(count) {
    let nextPage = this.currentPage + count;
    if (nextPage < 0 || nextPage >= this.totalPage) {
      return;
    }
    this.currentPage = nextPage;
  }

  created() {
  }
}
