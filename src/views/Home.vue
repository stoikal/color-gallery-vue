<template>
  <div id="home">
    <!-- <img class="logo" src="../assets/logo.png" alt="logo" /> -->
    <color-input v-on:addColor="handleAddColor"/>
    <color-view v-bind:color-list="colorList"/>
  </div>
</template>

<script>
import ColorInput from '../components/ColorInput/ColorInput.vue'
import ColorView from '../components/ColorView/ColorView.vue'

const initialColors = [
  '#A31621', '#BFDBF7', '#053C5E', '#1F7A8C', '#DB222A',
  '#3C1518', '#69140E', '#A44200', '#D58936', '#FFF94F',
  '#3A4F41', '#B9314F', '#D5A18E', '#DEC3BE', '#E1DEE3'
]

export default {
  data: function () {
    return {
      message: '👋Hello world🌎',
      colorList: initialColors
    }
  },
  methods: {
    handleAddColor: function(newColor) {
      this.colorList.push(newColor);
    }
  },
  components: {
    ColorInput,
    ColorView,
  }
}
</script>