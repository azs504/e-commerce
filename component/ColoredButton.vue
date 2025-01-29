<script setup lang="ts">
defineProps<{ context: string }>();
</script>

<template>
  <button class="gray-button">{{ context }}</button>
</template>

<style scoped>
.gray-button {
  background-color: gray;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.gray-button:hover {
  background-color: darkgray;
}
</style>
