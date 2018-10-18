<template>
  <div class="container" @click="clickHandle">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello'
    }
  },

  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
    }
  }
}
</script>

<style scoped>

</style>
