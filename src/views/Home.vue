<template>
  <div id="home">
    <!-- <img class="logo" src="../assets/logo.png" alt="logo" /> -->
    <color-input />
  </div>
</template>

<script>
import ColorInput from '../components/ColorInput/ColorInput.vue'
export default {
  data: function () {
    return {
      message: '👋Hello world🌎'
    }
  },
  components: {
    ColorInput
  }
}
</script>