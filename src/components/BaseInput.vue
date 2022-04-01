<template>
  <label :for="uuid">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
  />
</template>
<script>
import UniqueID from '../UniqueID'
export default {
  setup() {
    const uuid = UniqueID().getID()
    return {
      uuid,
    }
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
