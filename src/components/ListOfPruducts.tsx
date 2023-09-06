import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { DATA_TYPE, Products_Type } from "../types";
import { isObjectInArray } from "../utils/checkingArryWithId";

interface Props {
  data: DATA_TYPE;
  basket: Products_Type[];
  setBasket: (v: Products_Type[]) => void;
}
function ListOfPruducts({ data, setBasket, basket }: Props) {
  const { products } = data;
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {products.length ? (
        products.map((product: Products_Type, key) => (
          <ListItem
            key={key}
            alignItems="flex-start"
            onClick={() => {
              if (isObjectInArray(basket, product.id)) {
                const newBasket = basket.filter((p) => p.id !== product.id);
                setBasket(newBasket);
              } else {
                setBasket([...basket, product]);
              }
            }}
          >
            <ListItemText
              primary={product.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Price in USD:
                  </Typography>
                  {` ${product.price}`}
                </React.Fragment>
              }
            />
            {isObjectInArray(basket, product.id) ? (
              <Checkbox defaultChecked />
            ) : (
              <Checkbox />
            )}
          </ListItem>
        ))
      ) : (
        <div>There is no product yet!!!</div>
      )}
    </List>
  );
}

export default ListOfPruducts;
