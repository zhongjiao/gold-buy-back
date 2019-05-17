<template>
  <div id="app">
    <NTHeader title="黄金回购" />
    <div class="weui-grids">
      <a href="javascript:;" @click="goHtml('orders')" class="weui-grid">
        <p class="weui-grid__label">订单查询</p>
      </a>
      <a href="javascript:;" @click="goHtml('transfer')" class="weui-grid">
        <p class="weui-grid__label">黄金交易</p>
      </a>
    </div>
  </div>
</template>

<script>
import NTHeader from '@c/nt-header.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    NTHeader
  },
  methods: {
    goHtml(name) {
      window.location.href = `${name}.html`
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .appList {
    width: 33.33%;
    float: left;
  }
</style>
