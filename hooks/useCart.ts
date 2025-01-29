import type { Cart, Product } from "../interface/homePage";

const cartItems = reactive<Cart[]>([]);

export default function useCart() {
  const addToCart = (product: Product, quantity: number) => {
    const { id, title, price, image } = product;

    const cartData = { id, title, price, image, quantity };

    const index = cartItems.findIndex((item) => item.id === cartData.id);

    if (index >= 0) {
      cartItems[index] = {
        ...cartItems[index],
        quantity: cartItems[index].quantity + quantity,
      };

      return;
    }

    cartItems.push(cartData);
  };

  const removeFromCart = (index: number) => {
    cartItems.splice(index, 1);
  };

  return {
    cartItem: readonly(cartItems),
    addToCart,
    removeFromCart,
  };
}
