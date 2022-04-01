<template>
  <div class="home">
    <VoterRow :voter="voter" />
  </div>
</template>

<script>
// @ is an alias to /src
import VoterRow from '@/components/VoterRow.vue'

export default {
  name: 'HomeView',
  components: {
    VoterRow,
  },
  data() {
    return {
      voter: {
        name: 'Danny',
        tags: [
          { name: 'Puppies', pro: true },
          { name: 'Cats', pro: false },
          { name: 'Aligators', pro: true },
          { name: 'Spiders', pro: false },
          { name: 'Snakes', pro: false },
        ],
      },
    }
  },
}
</script>
