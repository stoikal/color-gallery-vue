<template>
  <form v-on:submit.prevent="handleSubmit">
    <input type="color" v-model="colorHex"/>
    <button v-bind:disabled="disableButton">Add color</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      colorHex: ''
    }
  },
  computed: {
    isInputValid: function() {
      return /^#[0-9A-F]{6}$/i.test(this.colorHex)
    },
    disableButton: function() {
      return !this.colorHex || !this.isInputValid
    }
  },
  methods: {
    handleSubmit: function() {
      this.$emit('addColor', this.colorHex)
    }
  }
}
</script>