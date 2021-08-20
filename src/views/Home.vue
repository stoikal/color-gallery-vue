<template>
  <div id="home">
    <color-input v-on:addColor="handleAddColor"/>
    <color-filter v-on:filterChange="handleFilterChange"/>
    <color-view v-bind:color-list="filteredColorList"/>
  </div>
</template>

<script>
import ColorInput from '../components/ColorInput/ColorInput.vue';
import ColorFilter from '../components/ColorFilter/ColorFilter.vue';
import ColorView from '../components/ColorView/ColorView.vue';

const initialColors = [
  '#A31621', '#BFDBF7', '#053C5E', '#1F7A8C', '#DB222A',
  '#3C1518', '#69140E', '#A44200', '#D58936', '#FFF94F',
  '#3A4F41', '#B9314F', '#D5A18E', '#DEC3BE', '#E1DEE3',
  '#04724D', '#9BC53D', '#C3423F', '#FDE74C', '#004F2D',
]

export default {
  data: function () {
    return {
      colorList: initialColors,
      filter: {}
    }
  },
  computed: {
    filteredColorList() {
      return this.colorList;


      // return this.colorList
      //   .map(color => color)
        // .filter(() => true)
        // .filter((color) => {
        //   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        //   const threshold = 128;

        //   if (this.filter.reddish && parseInt(result[1], 16) < threshold) {
        //     return false;
        //   }

        //   if (this.filter.greenish && parseInt(result[2], 16) < threshold) {
        //     return false;
        //   }

        //   if (this.filter.blueish && parseInt(result[3], 16) < threshold) {
        //     return false;
        //   }

        //   return true
        // })
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