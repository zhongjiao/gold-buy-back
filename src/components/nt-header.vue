<template>
  <div class="nt-header" :style="{position: position}">
    <span
      class="iconfont icon-fanhui backArrow"
      v-if="isBack"
      :class="{'backActive': isActive}"
      @touchstart="isActive = true"
      @touchend="isActive = false;$router.goBack(-1)"
    ></span>
    <!-- 返回 -->
    <div class="nt-txt-center header-title nt-w-50 nt-noWrap">{{title}}</div>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: 'NtHeader',
  props: {
    title: String,
    position: {
      type: String,
      default: 'relative'
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>
<style lang="less" scoped>
  @CHeight: 2rem;
  .nt-header {
    box-sizing: border-box;
    background-color: @normalOrange;
    padding: @CPadding;
    height: @CHeight;
    color: #fff;
    .backArrow {
      position: absolute;
      left: 0;
      top: 0;
      height: @CHeight;
      width: @CHeight;
      line-height: @CHeight;
      text-align: center;
      user-select: none;
      &.backActive {
        background: @selectedOrange;
      }
    }
    .header-back {
      margin-left: 0.625rem;
    }
    .header-title {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: .8rem;
      transform: translate(-50%, -50%);
      line-height: 1;
    }
  }
</style>
