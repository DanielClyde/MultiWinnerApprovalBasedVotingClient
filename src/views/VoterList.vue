<template>
  <VoterRow v-for="voter in voters" :key="voter.name" :voter="voter" />
</template>

<script>
// @ is an alias to /src
import VoterRow from '@/components/VoterRow.vue'

export default {
  name: 'HomeView',
  components: {
    VoterRow,
  },
  computed: {
    voters() {
      return this.$store.state.voters
    },
  },
  created() {
    this.$store.dispatch('fetchVoters')
  },
}
</script>
