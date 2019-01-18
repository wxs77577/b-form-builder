<template>
  <component :is="com" v-model="model" v-bind="$props"></component>
</template>

<script>
export default {
  props: {
    value: {},
    options: {},
    tag: {default: 'input'}
  },
  computed: {
    com(){
      return 'b-form-' + this.tag
    },
    model: {
      get(){
        return this.value
      },
      set(value){
        this.$emit('input', value)
      }
    }
  }
}
</script>
