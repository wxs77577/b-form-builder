<template>
  <b-form-builder inline :fields="searchFields" v-model="searchModel" submit-text="Search"></b-form-builder>
</template>

<script>


export default {
  name: 'app',
  data(){
    return {
      searchFields: {
        category: {
          tag: 'select',
          label: 'Category',
          options: [
            {text: 'Frontend', value: 1},
            {text: 'Backend', value: 2},
            {text: 'Fullstack', value: 3},
          ]
        },
        keyword: {label: 'keyword'},
        
      },
      searchModel: {
        category: null,
        keyword: ''
      },
      
    }
  }
}
</script>

<style>

</style>
