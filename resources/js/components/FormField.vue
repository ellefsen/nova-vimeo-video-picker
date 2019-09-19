<template>
  <default-field
    :field="field"
    :errors="errors">
    <template slot="field">
      <select
        class="form-control form-select mb-3 w-full"
        :class="errorClasses"
        v-model="value">
        <option
          :value="null"
          selected="selected"
          disabled="disabled">
          —
        </option>
        <option
          :value="option"
          v-for="(option,index) in options"
          :key="index">
          {{ option.name }}
        </option>
      </select>

      <div class="mt-8">
        <div
          v-if="value"
          class="video-container"
          v-html="value.iframe" />
      </div>
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova"

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ["resourceName", "resourceId", "field"],

  mounted () {
    window.axios.get("/nova-custom/vimeo")
      .then(response => {
        this.options = response.data
      })

    console.log(this.field)
  },

  data () {
    return {
      options: []
    }
  },

  methods: {
    /*
      * Set the initial, internal value for the field.
      */
    setInitialValue() {
      this.value = this.field.value || ""
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, JSON.stringify(this.value) || "")
    },

    /**
     * Update the field's internal value.
     */
    handleChange(value) {
      this.value = value
    },
  },
}
</script>
