<template>
  <div class="nt-h-100 nt-toFlex nt-flex-colume">
    <NTHeader isBack title="黄金交易"/>
    <NTWeakNetPage v-if="isWeakNet" class="nt-h-100 nt-flex1" @refresh="init"></NTWeakNetPage>
    <div v-else class="nt-pd-comm nt-flex1"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'transferIndex',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('global', ['isWeakNet'])
  },
  methods: {
    init() {
      console.log('refresh')
    }
  }
}
</script>

<style lang="less">
  .clssss {
    background: #fff;
  }
</style>
