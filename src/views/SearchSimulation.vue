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
    <button class="button -fill-gradient" type="submit">Search</button>
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
  data() {
    return {
      abcRuleOptions: ['AV', 'CC', 'Phragmens'],
      terms: ['Dogs', 'Cats', 'Aligators', 'Spiders', 'Snakes'],
      form: {
        abcRule: 'AV',
        searchTerm: '',
      },
    }
  },
  onFormSubmit() {
    console.log('MAKE REQUEST WITH THIS DATA', this.form)
  },
}
</script>
