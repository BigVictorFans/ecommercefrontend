import axios from "axios";

import { API_URL } from "./constants.js";

export const getOrders = async () => {
  const response = await axios.get(API_URL + "orders");
  return response.data;
};


export const createOrder = async (
  customerName,
  customerEmail,
  products,
  totalPrice
) => {
  const response = await axios.post(API_URL + "orders", {
    customerName: customerName,
    customerEmail: customerEmail,
    products: products,
    totalPrice: totalPrice,
  });

  return response.data;
};

export async function deleteOrder(id) {
  // DELETE http://localhost:5123/orders/68a56c5c2a01f899adb75255
  const response = await axios.delete(API_URL + "orders/" + id);
  return response.data;
}