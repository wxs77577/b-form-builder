<template>
  <component :is="com">
    <b-btn>ok</b-btn>
  </component>
</template>

<script>
import Vue from 'vue'




export default {
  components: {
    // BForm: Form
  },
  props: {
    com: { default: 'div' }
  },
  data(){
    return {

    }
  }
}
</script>
