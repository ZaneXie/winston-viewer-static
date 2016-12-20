<template>
  <div class="col-md-12">
    <table id="example" class="table table-bordered table-striped table-hover" width="100%" cellspacing="0" ref="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
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
        <td v-for="i in item">{{ i }}</td>
      </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li :class="{disabled: currentPage < 1}">
          <a href="#" aria-label="Previous" v-on:click.prevent="nextPage(-1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="count in totalPage" :class="{active: (count - 1)===currentPage}"><a href="#" v-on:click.prevent="gotoPage(count - 1)">{{count}}</a></li>
        <li :class="{disabled: currentPage >= totalPage - 1}">
          <a href="#" aria-label="Next" v-on:click.prevent="nextPage(1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>

</style>
