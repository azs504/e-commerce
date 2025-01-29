<script setup lang="ts">
import useProducts from "../hooks/useProducts";
import ProductCard from "../component/ProductCard.vue";
import ColoredButton from "../component/ColoredButton.vue";
import CartButton from "../component/CartButton.vue";

const router = useRouter();
const route = useRoute();
const url = computed(() => route.query.c as string);

const { products } = useProducts(url);

const categories = [
  {
    title: "men's clothing",
    href: "men-c",
  },
  {
    title: "women's clothing",
    href: "wom-c",
  },
  {
    title: "jewelery",
    href: "jew",
  },
  {
    title: "electronics",
    href: "ele",
  },
];

const handleClick = (productId: number) => {
  router.push({ path: `/detail/${productId}` });
};
</script>

<template>
  <div class="home-page">
    <h1>My Web Store</h1>

    <CartButton />

    <NuxtLink class="button" to="/">
      <ColoredButton context="All" />
    </NuxtLink>
    <NuxtLink
      v-for="category in categories"
      class="button"
      :to="`?c=${category.title}`"
    >
      <ColoredButton :context="category.title" />
    </NuxtLink>
    <ProductCard @onClick="handleClick" :dataList="products.data" />
  </div>
</template>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 20px;
}

.button {
  margin: 10px;
}
</style>
