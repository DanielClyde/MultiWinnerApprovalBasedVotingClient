<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    class="field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => $emit('update:modelValue', $event.target.value),
    }"
    :id="uuid"
    :placeholder="label"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
<script>
import UniqueID from '../UniqueID'
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  setup() {
    const uuid = UniqueID().getID()
    return {
      uuid,
    }
  },
}
</script>
