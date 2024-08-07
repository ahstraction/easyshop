"use client";
import { useMemo } from "react";

import { useAtomValue } from "@/jotai/useAtomValue";
import { products } from "@/constants/products";
import { Product } from "@/types";

type CartItem = {
  id: string | number;
  quantity: number;
};

const useShoppingCart = () => {
  const [cartItems, setCartItems] = useAtomValue("cart");
  const [isOpen, setIsOpen] = useAtomValue("isCartOpen");

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const cartQuantity = useMemo(
    () =>
      cartItems?.reduce(
        (quantity: number, item: CartItem) => item.quantity + quantity,
        0
      ),
    [cartItems]
  );

  const getItemQuantity = (id: number | string) => {
    return cartItems.find((item: any) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number | string) => {
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find((item: any) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number | string) => {
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: CartItem) => item.id !== id);
      } else {
        return currItems.map((item: CartItem) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number | string) => {
    setCartItems((currItems: CartItem[]) => {
      return currItems.filter((item: CartItem) => item.id !== id);
    });
  };

  const cartProducts: Product[] = useMemo(() => {
    const cartProducts: any[] = [];

    cartItems.forEach((item: CartItem) => {
      const found = products.find((product) => product.id === item.id);
      if (found) {
        cartProducts.push(found);
      }
    });

    return cartProducts;
  }, [cartItems]);

  const cartProductsTotalPrice = useMemo(() => {
    const totalPice = cartProducts.reduce(
      (totalPrice: number, product: Product) =>
        (totalPrice +=
          Number(product.price || 0) * getItemQuantity(product.id)),
      0
    );

    return totalPice;
  }, [cartItems]);

  return {
    getItemQuantity,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    isOpen,
    onOpen,
    onClose,
    cartProducts,
    cartProductsTotalPrice,
  };
};

export default useShoppingCart;
