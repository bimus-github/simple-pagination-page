import { Container, Link, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import ListOfPruducts from "../components/ListOfPruducts";
import { DATA_TYPE, Products_Type } from "../types";
import SelectProducts from "../components/SelectProducts";

function Products() {
  const [data, setData] = useState<DATA_TYPE>({ products: [] });
  const [category, setCategory] = useState<string>("");
  const [skip, setSkip] = useState<number>(0);
  const [basket, setBasket] = useState<Products_Type[]>([]);
  const [isOpenBasket, setIsOpenBasket] = useState<boolean>(false);

  useEffect(() => {
    if (category.length === 0) {
      fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}&select=title,price`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    } else {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [basket, category, skip]);

  return (
    <Container>
      {/* basket */}
      {basket.length !== 0 && (
        <Link
          component="button"
          variant="body2"
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
          }}
          onClick={() => setIsOpenBasket(!isOpenBasket)}
        >
          {isOpenBasket ? "Close Basket" : "Open Basket"}
        </Link>
      )}
      {/* list of products in basket */}
      {isOpenBasket && (
        <ListOfPruducts
          data={{ products: basket }}
          setBasket={setBasket}
          basket={basket}
        />
      )}

      {/* get products by categories */}
      {!isOpenBasket && (
        <SelectProducts category={category} setCategory={setCategory} />
      )}

      {/* list of products */}
      {!isOpenBasket && (
        <ListOfPruducts data={data} setBasket={setBasket} basket={basket} />
      )}

      {/* Pagination */}
      {category.length === 0 && !isOpenBasket && (
        <Pagination
          onChange={(e, page) => {
            setSkip((page - 1) * 10);
          }}
          count={10}
          color="primary"
        />
      )}
    </Container>
  );
}

export default Products;
