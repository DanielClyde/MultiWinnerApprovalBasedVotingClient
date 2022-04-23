<template>
  <button @click="regenerateVoters" class="button -fill-gradient">
    Regenerate Voters
  </button>
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
  methods: {
    regenerateVoters() {
      this.$store.dispatch('refreshVoters')
    },
  },
}
</script>
