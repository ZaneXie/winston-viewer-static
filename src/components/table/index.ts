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
  props: {
    'order': {
      type: String,
      default: 'asc',
    },
    'autoRefresh': {
      type: Boolean,
      default: true
    },

    'hasPagination': {
      type: Boolean,
      default: true
    }
  },
  asyncComputed: {
    current()
    {
      let option = {};
      option['name'] = this.currentLogger;
      option['order'] = this.order || 'desc';
      if (this.hasPagination) {
        option['start'] = this.currentPage * this.pageSize;
        option['limit'] = this.pageSize;
      }
      option['from'] = 1;
      this.refreshMe = this.refreshMe;
      return (<any>this).$http.get('query?' + encodeQueryData(option)).then((response) => {
        let res = JSON.parse(response.body);
        let data: any[] = [];
        for (let name in res) {
          let origin = res[name];
          let transed: any[] = [];
          for (let k of origin) {
            let trans = {
              name: name,
              timestamp: new Date(k.timestamp).toLocaleString(),
              message: k.message,
              level: k.level
            };
            delete k['timestamp']
            delete k['message']

            trans['meta'] = k;
            trans['xxx'] = "<span>333</span>"
            transed.push(trans);
          }

          data = data.concat(transed);
        }
        if (data.length != 0 && this.currentPage === this.totalPage - 1) {
          this.totalPage++;
        }
        if (data.length === 0) {
          this.totalPage = this.currentPage + 1;
        }
        return data;
      });
    }
  }
  ,
  filters: {
    cutMessage(message)
    {
      return message.slice(0, 50);
    }
  }
})
export class Viewer extends Vue {
  pageSize: number = 10;
  totalPage: number = 10;
  // autoRefresh: boolean = true;
  /**
   * 单位：秒
   * @type {number}
   */
  refreshInterval: number = 10;
  currentPage: number = 0;
  loggers: string[] = [];
  currentLogger: string = '选择日志';
  private http;
  showAdvance: boolean = false;
  /**
   * fixme: used to trigger current change, refresh page
   * @type {number}
   */
  refreshMe: number = 0;

  mounted() {
    this.http = (<any>this).$http;
    this.http.get('loggers').then((response) => {
      this.loggers = JSON.parse(response.body);
    });


    let ar = () => {
      if ((<any>this).autoRefresh) {
        this.refresh();
      }
      setTimeout(ar, this.refreshInterval * 1000);
    };
    setTimeout(ar, this.refreshInterval * 1000);
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

  refresh() {
    this.refreshMe++;
  }

  created() {
  }
}
