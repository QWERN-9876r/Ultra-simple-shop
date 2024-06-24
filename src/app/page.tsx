"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "./components/products";
import styles from "./page.module.css";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <Products />
      </main>
    </QueryClientProvider>
  );
}
