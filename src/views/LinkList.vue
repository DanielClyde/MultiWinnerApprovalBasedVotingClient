<template>
  <button @click="regenerateLinks" class="button -fill-gradient">
    Regenerate Links
  </button>
  <VoterRow v-for="link in links" :key="link.name" :voter="link" />
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
    links() {
      return this.$store.state.links
    },
  },
  methods: {
    regenerateLinks() {
      this.$store.dispatch('refreshLinks')
    },
  },
}
</script>
