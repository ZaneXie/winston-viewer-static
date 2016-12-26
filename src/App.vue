<template>
  <div id="app" class="container">
    <div class="row">
      <div>

        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">最新日志</a></li>
          <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">顺序查询</a></li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="home">
            <viewer order="desc" :hasPagination="false"></viewer>
          </div>
          <div role="tabpanel" class="tab-pane" id="profile">
            <viewer order="asc" :autoRefresh="false"></viewer>
            <div>
        </div>
      </div>

    </div>
  </div>
          </div>
</template>

<style>
</style>
