<template>
  <span class="tag" :class="{ pro: pro }">{{ text }}</span>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    pro: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.tag {
  padding: 5px 12px;
  color: white;
  font-size: 12pt;
  background: rgb(255, 114, 114);
  background: linear-gradient(
    165deg,
    rgba(251, 188, 188) 0%,
    rgb(255, 114, 114) 70%
  );
  width: fit-content;
  height: fit-content;
  border-radius: 1em;
  font-weight: 600;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  margin: 0px 5px;
}

.pro {
  background: rgb(55, 171, 63);
  background: linear-gradient(
    165deg,
    rgba(143, 249, 141, 1) 0%,
    rgba(55, 171, 63, 1) 70%
  );
}
</style>
