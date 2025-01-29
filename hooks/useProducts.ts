import type { Product } from "../interface/homePage";

export default function useProducts(category: ComputedRef<string | undefined>) {
  const products = reactive<{ data: Product[] }>({ data: [] });

  watch(toRef(category), () => {
    getItems();
  });

  const getItems = async () => {
    try {
      const url = category.value
        ? new URL(
            `https://fakestoreapi.com/products/category/${category.value}`
          ).href
        : "https://fakestoreapi.com/products";

      const response = await fetch(url);
      const data = (await response.json()) as Product[];

      products.data = data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  onMounted(() => {
    getItems();
  });

  return {
    products: readonly(products),
  };
}
