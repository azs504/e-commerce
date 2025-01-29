<script setup lang="ts">
import CTAButton from "../../component/CTAButton.vue";
import useCart from "../../hooks/useCart";

const { cartItem, removeFromCart } = useCart();
</script>

<template>
  <div class="cart-page">
    <NuxtLink to="/">
      <h1>My Web Store</h1>
    </NuxtLink>

    <div v-if="cartItem.length === 0">No item in cart</div>
    <div v-else class="cart-card" v-for="(item, index) in cartItem">
      <img class="image" :src="`${item.image}`" />
      <div class="card-title">{{ item.title }}</div>
      <div class="card-quantity">Quantity {{ item.quantity }}</div>
      <CTAButton @click="removeFromCart(index)" context="Delete" color="red" />
    </div>
  </div>
</template>

<style>
.cart-page {
  text-align: start;
  margin: 20px;
}

.cart-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 700px;
}

.card-title {
  width: 170px;
}

.card-quantity {
  width: 190px;
  font-size: 30px;
}

.image {
  width: auto;
  height: 70px;
  max-width: 100px;
  object-fit: scale-down;
}
</style>
