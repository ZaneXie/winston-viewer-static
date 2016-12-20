/**
 * Created by xiezj on 2016/12/19.
 */

import Vue = require("vue");
var $ = require('jquery');
import {VueComponent} from "../../utils/decorators";

@VueComponent(require('./index.vue'), {
  filters:{
    toClass(page){
      console.log(this);
      if(page == this.currentPage){
        return 'active'
      }
      return '';
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

  get totalPage() {
    return Math.ceil(this.all.length / this.pageSize);
  }

  get current() {
    return this.all.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize)
  }

  currentPage: number = 0;

  mounted() {

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
    // setInterval(()=>{
    //   console.log(table);
    // }, 2000)
    let i = 0;
    setInterval(() => {
      this.all.push(
        ['a' + i, 'b' + i, 'c' + i, 'd', 'e', 'f'],
      )
      i++;
      // $(this.$refs['table']).DataTable();
      // console.log(table.row.add);
      // table.row.add(
      //     ['a', 'b','c','d','e', 'f'],
      // )
    }, 1000)
  }
}
