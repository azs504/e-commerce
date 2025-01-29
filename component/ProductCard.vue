<script setup lang="ts">
import type { Product } from "../interface/homePage";

defineProps<{ dataList: Readonly<Product[]> }>();
defineEmits<{ (e: "onClick", id: number): void }>();
</script>

<template>
  <div class="container">
    <div
      v-for="data in dataList"
      :key="data.id"
      class="card"
      @click="$emit('onClick', data.id)"
    >
      <div class="image-wrapper">
        <img :src="data.image" alt="Product Image" class="image" />
      </div>
      <div class="content">
        <h1 class="title">{{ data.title }}</h1>
        <p class="price">$ {{ data.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
}

.image {
  justify-content: center;
  width: auto;
  height: 200px;
  max-width: 100%;
  object-fit: scale-down;
}

.content {
  padding: 15px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
}

.price {
  font-size: 16px;
  color: #007b00;
  margin: 0 0 10px;
}
</style>
