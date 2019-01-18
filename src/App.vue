<template>
  <div id="app" class="container">
    <h1>Bootstrap Form Builder</h1>
    <hr>
    <div class="row">
      <div class="col-md-3">
        <b-card header="Login">
          <login-form></login-form>
        </b-card>
      </div>
      <div class="col-md-9">
        <b-card header="Search">
          <search-form></search-form>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './demo/LoginForm'
import SearchForm from './demo/SearchForm'

export default {
  name: 'app',
  components: {
    LoginForm, SearchForm
  },
  data(){
    return {
      
      
    }
  }
}
</script>

<style>

</style>
