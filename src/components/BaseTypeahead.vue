<template>
  <div class="type-ahead-container">
    <BaseInput
      v-bind="$attrs"
      type="text"
      :label="label"
      v-model="search"
      @update:modelValue="onChange"
      @keydown.down.prevent="onArrowDown"
      @keydown.up.prevent="onArrowUp"
      @keydown.enter="onEnter"
    />
    <div class="result-container" v-show="isShowingResults">
      <div
        @click="setResult(result)"
        v-for="(result, i) in results"
        :key="i"
        class="result-row"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '@/components/BaseInput.vue'
export default {
  components: {
    BaseInput,
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  data() {
    return {
      search: '',
      results: [],
      isShowingResults: false,
      arrowCounter: 0,
    }
  },
  methods: {
    setResult(result) {
      this.search = result
      this.isShowingResults = false
      this.$emit('onSelection', this.search)
    },
    onChange() {
      this.results = this.options.filter(
        (o) => o.toLowerCase().indexOf((this.search || '').toLowerCase()) > -1
      )
      this.isShowingResults = true
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isShowingResults = false
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
      }
    },
    onEnter() {
      this.setResult(this.results[this.arrowCounter])
      this.arrowCounter = 0
    },
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ['onSelection'],
}
</script>
<style scoped>
.type-ahead-container {
  position: relative;
}
.type-ahead-container .result-container {
  position: absolute;
  top: calc(100% - 24px);
  width: 100%;
  border: 1px solid #e4e4e4;
  border-top: none;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.result-row {
  padding: 8px;
  background: white;
  border-bottom: 1px solid #e4e4e4;
}
.result-row:hover {
  background: #daf6ea;
  cursor: pointer;
}
.result-row.is-active {
  background: #daf6ea;
  cursor: pointer;
}
</style>
