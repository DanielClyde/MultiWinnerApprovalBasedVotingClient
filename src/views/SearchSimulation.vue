<template>
  <form @submit.prevent="onFormSubmit">
    <div class="form-row">
      <div class="smaller">
        <BaseSelect
          :options="abcRuleOptions"
          v-model="form.abcRule"
          :label="'ABC Rule'"
        />
      </div>
      <div class="smaller">
        <BaseSelect
          :options="numberOfResultsOptions"
          v-model="form.numOfResults"
          :label="'Number of Results'"
        />
      </div>
      <div class="larger">
        <BaseTypeAhead
          @onSelection="form.searchTerm = $event"
          :options="terms"
          :label="'Search'"
        />
      </div>
      <div class="smaller">
        <button
          :disabled="!formValid"
          class="button -fill-gradient"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
    <div v-if="totalSocialWelfare >= 0" class="total">
      Social Welfare: {{ totalSocialWelfare }}
      <span class="total pad-left"
        >Total Representation: {{ totalRepresentation }}%</span
      >
    </div>
    <div class="link-list" v-if="winningLinks.length">
      <VoterRow v-for="link in winningLinks" :key="link.name" :voter="link" />
    </div>
  </form>
</template>
<script>
import BaseSelect from '@/components/BaseSelect.vue'
import BaseTypeAhead from '@/components/BaseTypeahead.vue'
import VoterRow from '@/components/VoterRow.vue'

export default {
  components: {
    BaseSelect,
    BaseTypeAhead,
    VoterRow,
  },
  computed: {
    totalRepresentation() {
      return this.$store.state.simulationResults.totalRepresentation
    },
    totalSocialWelfare() {
      return this.$store.state.simulationResults.totalSocialWelfare
    },
    winningLinks() {
      return this.$store.state.simulationResults.winningLinks
    },
    losingLinks() {
      return this.$store.state.simulationResults.losingLinks
    },
    terms() {
      return this.$store.state.searchTerms
    },
    formValid() {
      return (
        this.form &&
        this.form.abcRule &&
        this.form.searchTerm &&
        this.form.numOfResults
      )
    },
  },
  data() {
    return {
      abcRuleOptions: ['av', 'seqcc', 'revseqpav', 'sav', 'seqphragmen'],
      numberOfResultsOptions: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      form: {
        abcRule: 'AV',
        searchTerm: '',
        numOfResults: 2,
      },
    }
  },
  methods: {
    onFormSubmit() {
      this.$store.dispatch('fetchResults', this.form)
    },
  },
}
</script>
<style>
.pad-left {
  margin-left: 40px;
}
.total {
  width: 100%;
  font-size: 18pt;
  color: #666666;
}
.form-row {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.smaller {
  flex: 1;
  margin: 0px 10px;
}
.larger {
  flex: 3;
  margin: 0px 10px;
}
.link-list {
  margin: 20px 0px;
}
</style>
