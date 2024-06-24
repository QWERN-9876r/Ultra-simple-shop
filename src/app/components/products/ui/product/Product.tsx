"use client";

import { FC } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import styles from "./product.module.css";
import { UseMutateFunction } from "react-query";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Props {
  product: Product;
  deleteProduct: (id: number) => void;
}

export const Product: FC<Props> = ({
  product: { id, title, description, price, image },
  deleteProduct,
}) => {
  return (
    <Card className={styles.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <CardMedia
          sx={{
            height: 300,
            width: 250,
          }}
          image={image}
          title={title}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            float: "right",
          }}
        >
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="error"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
