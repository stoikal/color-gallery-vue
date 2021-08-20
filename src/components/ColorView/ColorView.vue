<template>
  <div class="grid-container">
    <color-box 
      v-for="color of colorList" 
      v-bind:key="color"
      v-bind:color="color"
      @onRemove="$emit('removeColor', color)"
    ></color-box>
  </div>
</template>

<script>
import ColorBox from '../ColorBox/ColorBox.vue';
export default {
  props: ['colorList'],
  components: {
    ColorBox
  },
}
</script>

<style lang="scss" scoped>
.grid-container {
  margin: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
  gap: 1em;
  padding: 1em;
}
</style>