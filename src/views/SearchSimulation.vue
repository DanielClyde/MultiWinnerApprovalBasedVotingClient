<template>
  <form @submit.prevent="onFormSubmit">
    <BaseSelect
      :options="abcRuleOptions"
      v-model="form.abcRule"
      :label="'ABC Rule'"
    />
    <BaseTypeAhead
      @onSelection="form.searchTerm = $event"
      :options="terms"
      :label="'Search'"
    />
    <h4>Form Value:</h4>
    <pre>{{ form }}</pre>
    <button :disabled="!formValid" class="button -fill-gradient" type="submit">
      Search
    </button>
  </form>
</template>
<script>
import BaseSelect from '@/components/BaseSelect.vue'
import BaseTypeAhead from '@/components/BaseTypeahead.vue'
export default {
  components: {
    BaseSelect,
    BaseTypeAhead,
  },
  computed: {
    terms() {
      return this.$store.state.searchTerms
    },
    formValid() {
      return this.form && this.form.abcRule && this.form.searchTerm
    },
  },
  data() {
    return {
      abcRuleOptions: ['AV', 'CC', 'Phragmens'],
      form: {
        abcRule: 'AV',
        searchTerm: '',
      },
    }
  },
  methods: {
    onFormSubmit() {
      console.log('MAKE REQUEST WITH THIS DATA', this.form)
      this.$store.dispatch('fetchResults', this.form)
    },
  },
}
</script>
