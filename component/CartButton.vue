<script setup>
import cart from "../asset/image/cart.svg";
</script>

<template>
  <NuxtLink to="/cart">
    <img class="cart-icon" :src="cart" />
  </NuxtLink>
</template>

<style scoped>
.cart-icon {
  position: fixed;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cart-icon:hover {
  transform: scale(1.2);
}
</style>
