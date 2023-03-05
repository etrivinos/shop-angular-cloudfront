export interface Product {
  /** Available count */
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  count: number;
}

export interface ProductCheckout extends Product {
  orderedCount: number;
  /** orderedCount * price */
  totalPrice: number;
}
