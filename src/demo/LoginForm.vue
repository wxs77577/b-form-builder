<template>
  <b-form-builder 
  :fields="loginFields" 
  v-model="loginModel" 
  submit-text="Login"
  @submit="login"
  ></b-form-builder>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      loginFields: {
        username: {label: 'Username', description: 'Username or phone number.', placeholder: 'Johnny'},
        password: {label: 'Password', description: 'Must contains alpha and numbers'},
        remember_me: {label: 'Remember me', tag: 'checkbox', description: 'Keep logged in one month.'},
      },
      loginModel: {
        username: '',
        password: ''
      },
      
    }
  },
  methods: {
    login(){
      alert('Login success.')
    }
  }
}
</script>

<style>

</style>
