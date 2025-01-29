<script setup lang="ts">
import useCart from "../../../hooks/useCart";
import type { Product } from "../../../interface/homePage";
import CTAButton from "../../../component/CTAButton.vue";
import Dialog from "../../../component/Dialog.vue";
import CartButton from "../../../component/CartButton.vue";

const { addToCart } = useCart();
const route = useRoute();
const product = reactive<{ data: Product | null }>({ data: null });
const quantity = ref(0);
const dialog = ref();

const id = route.params.productId;

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((data) => {
    product.data = data as Product;
  });

const handleBuy = () => {
  if (!product.data) return;
  addToCart(product.data, quantity.value);
};

const handleAddCart = () => {
  handleBuy();

  dialog.value.showModal();
  quantity.value = 0;
};
</script>

<template>
  <div class="buy-page">
    <h1>My Web Store</h1>

    <CartButton />

    <div v-if="product.data" class="container">
      <img class="picture" :src="product.data.image" />
      <div class="context">
        <div class="context-tittle">{{ product.data.title }}</div>
        <div class="context-description">{{ product.data.description }}</div>
        <div class="context-price">$ {{ product.data.price }}</div>
        <div class="quantity-container">
          <div class="quantity-text">Quantity</div>
          <button
            class="quantity-subtract-add"
            @click="quantity <= 0 ? 0 : quantity--"
          >
            -
          </button>
          <input class="quantity-input" type="number" v-model="quantity" />
          <button
            class="quantity-subtract-add"
            @click="
              quantity >= product.data.rating.count
                ? product.data.rating.count
                : quantity++
            "
          >
            +
          </button>
        </div>
        <div class="button-section">
          <NuxtLink to="/cart">
            <CTAButton
              :disabled="quantity === 0"
              @click="handleBuy"
              context="Buy"
              color="red"
            />
          </NuxtLink>

          <CTAButton
            :disabled="quantity === 0"
            @click="handleAddCart"
            context="Add Cart"
            color="blue"
          />
        </div>
      </div>
    </div>
  </div>

  <Dialog ref="dialog" />
</template>

<style scoped>
.buy-page {
  text-align: start;
  margin-top: 20px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.quantity-input {
  width: 45px;
  text-align: center;
}

.quantity-container {
  display: flex;
}

.quantity-text {
  margin-right: 10px;
}

.quantity-subtract-add {
  width: 30px;
  background-color: white;
  font-size: 18px;
  padding: 0px 8px 0px;
  border: 1px solid rgb(119, 119, 119);
  cursor: pointer;
}

.container {
  display: flex;
  margin-left: 30px;
  gap: 20px;
}

.context {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
}

.context-tittle {
  font-size: 18px;
  font-weight: bold;
}

.context-description {
  border-left: 4px solid #d62872;
  padding-left: 10px;
}

.context-price {
  font-size: 35px;
  color: #007b00;
}

.button-section {
  display: flex;
  gap: 10px;
}

.picture {
  width: auto;
  height: 200px;
  max-width: 200px;
  object-fit: scale-down;
}
</style>
