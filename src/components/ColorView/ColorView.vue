<template>
  <div class="grid-container">
    <color-box 
      v-for="color in list" 
      v-bind:key="color"
      v-bind:color="color"
    ></color-box>
  </div>
</template>

<script>
import ColorBox from '../ColorBox/ColorBox.vue';
export default {
  props: ['colorList'],
  data() {
    return {
      list: this.colorList
    }
  },
  components: {
    ColorBox
  }
}
</script>

<style lang="scss" scoped>
.grid-container {
  margin: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 80px));
  gap: 1em;
  padding: 1em;
}
</style>