<template>
  <div class="vue-table">
    <div class="row">
      <div class="col-md-12">
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
        <button class="btn btn-success" v-on:click.prevent="refresh">刷新</button>
        <button class="btn btn-default" v-on:click.prevent="showAdvance=!showAdvance">
          高级
        </button>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="autoRefresh"> 自动刷新</label>
          </label>
        </div>
      </div>
    </div>
    <div class="row" v-if="showAdvance">
      <div class="form-horizontal col-md-12">
        <div class="form-group">
          <label class="col-sm-2 control-label">
            刷新间隔
          </label>
          <div class="col-sm-10">
            <!--<input class="form-control" v-model="refreshInterval"/>-->
            <select class="form-control" v-model="refreshInterval">
              <option>1</option>
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div class="form-group" v-if="hasPagination">
          <label class="col-sm-2 control-label">
            页面大小
          </label>
          <div class="col-sm-10">
            <select class="form-control" v-model="pageSize">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <table id="example" class="table table-bordered table-striped table-hover" width="100%" cellspacing="0"
             ref="table">
        <thead>
        <tr>
          <th>log-name</th>
          <th>timestamp</th>
          <th>level</th>
          <th>message</th>
          <th>meta</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
          <th>log-name</th>
          <th>timestamp</th>
          <th>level</th>
          <th>message</th>
          <th>meta</th>
        </tr>
        </tfoot>
        <tbody>
        <tr v-for="item in current" :class="{danger:item.level==='error', warning:item.level==='warn'}">
          <td>{{item.name}}</td>
          <td>{{item.timestamp}}</td>
          <td>{{item.level}}</td>
          <td :title="item.message">{{item.message | cutMessage}}</td>
          <td v-json="item.meta" :title="JSON.stringify(item.meta)"></td>

        </tr>
        </tbody>
      </table>
    </div>
    <div class="row">

      <ul class="pagination" v-if="hasPagination">
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
    </div>
  </div>
</template>

<style scoped>
  .vue-table {
    margin-top: 10px
  }

  .row {
    margin-top: 5px
  }
</style>
