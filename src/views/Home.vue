<template>
  <div id="home">
    <color-input v-on:addColor="handleAddColor"/>
    <color-filter v-on:filterChange="handleFilterChange"/>
    <color-view v-bind:color-list="filteredColorList" v-on:removeColor="handleRemoveColor"/>
  </div>
</template>

<script>
import ColorInput from '../components/ColorInput/ColorInput.vue';
import ColorFilter from '../components/ColorFilter/ColorFilter.vue';
import ColorView from '../components/ColorView/ColorView.vue';
import hexToRgb from '../utils/hexToRgb';

const initialColors = [
  '#A31621', '#BFDBF7', '#053C5E', '#1F7A8C', '#DB222A',
  '#3C1518', '#69140E', '#A44200', '#D58936', '#FFF94F',
  '#3A4F41', '#B9314F', '#D5A18E', '#DEC3BE', '#E1DEE3',
  '#04724D', '#9BC53D', '#C3423F', '#FDE74C', '#004F2D',
]

const initialFilter = {
  reddish: false,
  greenish: false,
  blueish: false,
}

export default {
  data: function () {
    return {
      colorList: initialColors,
      filter: initialFilter,
    }
  },
  computed: {
    filteredColorList() {
      return this.colorList
        .filter((colorHex) => {
          const [r, g, b] = hexToRgb(colorHex);
          const threshold = 0.5;

          if (this.filter.reddish && r / 255 < threshold) {
            return false;
          }

          if (this.filter.greenish && g / 255 < threshold) {
            return false;
          }

          if (this.filter.blueish && b / 255 < threshold) {
            return false;
          }

          return true
        })
    }
  },
  methods: {
    handleAddColor: function(newColor) {
      if (this.colorList.includes(newColor)) {
        alert('color exists!')
      } else {
        this.colorList.push(newColor);
      }
    },
    handleRemoveColor: function(colorToRemove) {
      const index = this.colorList.indexOf(colorToRemove);

      this.colorList = [...this.colorList.slice(0, index), ...this.colorList.slice(index + 1)]
    },
    handleFilterChange: function({ name, checked }) {
      this.filter[name] = checked
    }
  },
  components: {
    ColorInput,
    ColorFilter,
    ColorView,
  }
}
</script>