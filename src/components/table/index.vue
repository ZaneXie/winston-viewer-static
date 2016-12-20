<template>
  <div class="col-md-12 vue-table">
    <div class="btn-group">
      <button class="btn btn-default">
        {{currentLogger}}
      </button>
      <button data-toggle="dropdown" class="btn btn-default dropdown-toggle">
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li v-for="logger in loggers">
          <a href="#" v-on:click.prevent="changeLogger(logger)">{{logger}}</a>
        </li>
      </ul>
    </div>

    <table id="example" class="table table-bordered table-striped table-hover" width="100%" cellspacing="0"
           ref="table">
      <thead>
      <tr>
        <th>timestamp</th>
        <th>message</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start date</th>
        <th>Salary</th>
      </tr>
      </thead>
      <tfoot>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start date</th>
        <th>Salary</th>
      </tr>
      </tfoot>
      <tbody>
      <tr v-for="item in current">
        <td>{{item.timestamp}}</td>
        <td :title="item.message">{{item.message | cutMessage}}</td>
        <td v-json="item.meta"></td>
      </tr>
      </tbody>
    </table>
    <ul class="pagination">
      <li :class="{disabled: currentPage < 1}">
        <a href="#" v-on:click.prevent="nextPage(-1)">Prev</a>
      </li>
      <li v-for="count in totalPage" :class="{active: (count - 1)===currentPage}">
        <a href="#"
           v-on:click.prevent="gotoPage(count - 1)">{{count}}</a>
      <li :class="{disabled: currentPage >= totalPage - 1}">
        <a href="#" v-on:click.prevent="nextPage(1)">Next</a>
      </li>
    </ul>
    <!--
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li :class="{disabled: currentPage < 1}">
          <a href="#" aria-label="Previous" v-on:click.prevent="nextPage(-1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="count in totalPage" :class="{active: (count - 1)===currentPage}"><a href="#"
                                                                                       v-on:click.prevent="gotoPage(count - 1)">{{count}}</a>
        </li>
        <li :class="{disabled: currentPage >= totalPage - 1}">
          <a href="#" aria-label="Next" v-on:click.prevent="nextPage(1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>-->
  </div>
</template>

<style scoped>
  .vue-table {
    margin-top: 10px
  }
</style>
