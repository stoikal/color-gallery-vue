<template>
  <div class="container">
    <div class="color" v-bind:style="{ background: color }"></div>
  </div>
</template>

<script>
export default {
  props: ['color'],
}
</script>

<style lang="scss" scoped>
  .color {
    width: 80px;
    height: 80px;
  }
</style>