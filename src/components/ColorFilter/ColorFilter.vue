<template>
  <div>
    <label>
      <input @change="handleChange" name="reddish" type="checkbox" />
      reddish
    </label>
    <label>
      <input @change="handleChange" name="greenish" type="checkbox" />
      greenish
    </label>
    <label>
      <input @change="handleChange" name="blueish" type="checkbox" />
      blueish
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange: function(e) {
      const { name, checked } = e.currentTarget;
      this.$emit('filterChange', { name, checked })
    }
  }
}
</script>