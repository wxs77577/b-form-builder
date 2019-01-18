<template>
  <div>
    <h1>Form builder</h1>
    <b-btn>okk</b-btn>
    <!-- <b-form-builder></b-form-builder> -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import BFormBuilder from './BFormBuilder'

Vue.use(BootstrapVue)

export default {
  components: { BFormBuilder }
}
</script>
