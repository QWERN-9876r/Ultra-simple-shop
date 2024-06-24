"use client";

import { FC } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Product } from "./product/Product";
import { SERVER_URL } from "@/env";

async function fetchProducts(): Promise<Product[]> {
  return (await fetch(SERVER_URL)).json();
}
async function deleteProduct(id: number) {
  return (await fetch(`${SERVER_URL}/${id}`, { method: "DELETE" })).json();
}

export const Products: FC = () => {
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery("products", fetchProducts);

  const mutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    <div>
      {data?.map((product, i) => (
        <Product
          deleteProduct={mutation.mutate}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};
