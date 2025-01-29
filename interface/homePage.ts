type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
};

export type Cart = Pick<Product, "id" | "title" | "price" | "image"> & {
  quantity: number;
};

type Category =
  | "men's clothing"
  | "jewelery"
  | "electronics"
  | "women's clothing";
