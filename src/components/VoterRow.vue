<template>
  <div class="voter-row">
    <div
      data-testid="voter-name"
      class="voter-name"
      :class="{ 'is-represented': voter.represented }"
    >
      {{ voter.name }}
    </div>
    <div class="tag-list">
      <TagPill v-for="t in tags" :key="t.title" :text="t.title" :pro="t.pro" />
    </div>
    <div v-if="voter.utility >= 0" class="utility">
      <div>Utility:</div>
      <div>{{ voter.utility }}</div>
    </div>
  </div>
</template>
<script>
import { orderBy } from 'lodash'
import TagPill from '@/components/TagPill.vue'
export default {
  props: {
    voter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tags() {
      return orderBy(this.voter.tags, ['pro', 'title'], ['desc', 'asc'])
    },
  },
  components: {
    TagPill,
  },
}
</script>
<style scoped>
.voter-row {
  min-height: 45px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.voter-name {
  font-size: 18pt;
  font-weight: 600;
  color: #666666;
}
.tag-list {
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
}
.is-represented {
  color: rgba(55, 171, 63, 1);
}
.utility {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14pt;
  color: #666666;
}
</style>
