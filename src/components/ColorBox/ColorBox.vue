<template>
  <div class="container">
    <div class="color" v-bind:style="{ background: color }"></div>
    <div>
      <span>{{ color.toUpperCase() }}</span>
      <button type="button" @click="onClick">×</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color'],
  methods: {
    onClick: function() {
      this.$emit('onRemove', this.color)
    }
  }
}
</script>

<style lang="scss" scoped>
  .color {
    width: 100px;
    height: 80px;
  }
</style>