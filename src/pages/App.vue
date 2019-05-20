<template>
  <div id="app">
    <transition :name="slideName">
      <keep-alive :include="keepAliveComponents">
        <router-view class="Router nt-Page backColor"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      slideName: 'slide-right'
    }
  },
  watch: {
    '$route'(to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.slideName = 'slide-right'
      } else {
        this.slideName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },
  computed: {
    ...mapState({
      keepAliveComponents: state => state.global.keepAliveComponents
    })
  }
}
</script>

<style lang="less">
  @import '../assets/style/mixins.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .backColor {
    background-color: @bodyBackColor;
  }
  .Router {
    transition: all 0.2s ease-in-out;
  }
  .slideTransition();
</style>
