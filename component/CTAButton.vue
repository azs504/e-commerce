<script setup lang="ts">
import ColoredButton from "../component/ColoredButton.vue";

defineProps<{ context: string; color: "blue" | "red" }>();
</script>

<template>
  <ColoredButton
    :class="`${color}`"
    style="width: 110px; height: 40px"
    :context="context"
  />
</template>

<style scoped>
.red {
  background-color: #bb0051;
}

.red:hover {
  background-color: #db2b77;
}

.red:disabled,
.red:disabled:hover {
  background-color: #bb0051;
  cursor: not-allowed;
  opacity: 0.6;
}

.blue {
  background-color: #1c6fbc;
}

.blue:hover {
  background-color: #348ada;
}

.blue:disabled,
.blue:disabled:hover {
  background-color: #1c6fbc;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
