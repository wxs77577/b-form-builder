<template>
  <component v-bind="$props" :is="tag" :inline="inline" @submit.prevent="$emit('submit')">
    <template v-if="inline">
      <template v-for="(field, key) in fields">
        <label v-text="field.label" :key="`form-label-${key}`"></label>
        <b-form-field v-model="model[key]" class="ml-1 mr-2" v-bind="field" :key="`form-field-${key}`"></b-form-field>
      </template>
    </template>
    <b-form-group v-else v-bind="field" v-for="(field, key) in fields" :key="key"
    :horizontal="horizontal">
      <b-form-field v-model="model[key]" v-bind="field"></b-form-field>
    </b-form-group>

    <b-button variant="primary" v-bind="submitButton" v-text="submitText" v-if="submitText" type="submit"></b-button>
  </component>
</template>

<script>
import BFormField from './FormField'

export default {
  components: {
    BFormField
  },
  props: {
    fields: {type: Object, required: true},
    horizontal: {type: Boolean, default: false},
    inline: {type: Boolean, default: false},
    tag: { default: 'b-form' },
    value: {type: Object, default: () => {}},
    submitText: {type: String},
    submitButton: {type: Object, default: () => {}},
  },
  data(){
    return {
      
    }
  },
  computed: {
    model: {
      get(){
        return this.value
      },
      set(){
        this.$emit('input', this.value)
      }
    }
  },
}
</script>
