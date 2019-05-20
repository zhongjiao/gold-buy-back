<template>
  <div class="nt-toFlex nt-flex-colume nt-flex-jst-ct nt-flex-algn-ct">
    <!-- <div class="weaknet-div nt-h-100"></div> -->
    <div>{{tipText}}</div>
    <div class="nt-mt625">
      <button class="weak-btn nt-pd625" @click="netRefresh">点我刷新</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NtWeaknetPage',
  props: {
    tipText: {
      type: String,
      default: '主人,网络报错啦,刷新试试!'
    }
  },
  data() {
    return {}
  },
  methods: {
    netRefresh() {
      let _self = this
      _self.$emit('refresh')
    }
  }
}
</script>

<style scoped>
  .weak-btn {
    background: none;
    border: 1px solid #999;
    border-radius: 0.15rem;
    width: 7rem;
  }
  .weaknet-div {
    /* background: url('../assets/images/weak-net.jpg') no-repeat center center;
      background-size: cover; */
  }
</style>
