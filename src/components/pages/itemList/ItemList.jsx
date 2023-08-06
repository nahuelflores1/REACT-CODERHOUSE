import { Card, CardContent, Skeleton, Stack } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <section
            style={{
                marginTop: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                boxShadow: "none",
            }}
        >
            {items.length > 0
                ? items.map((item) => {
                      return <ProductCard key={item.id} item={item} />;
                  })
                : arr.map((elemento) => (
                      <Stack className="all-products" key={elemento}>
                          <Card
                              className="product"
                              style={{ boxShadow: "none" }}
                          >
                              <Skeleton
                                  variant="rectangular"
                                  width={240}
                                  height={210}
                              />
                              <Skeleton
                                  variant="text"
                                  width={240}
                                  height={50}
                              ></Skeleton>
                              <Skeleton
                                  variant="rounded"
                                  width={70}
                                  height={20}
                              ></Skeleton>
                          </Card>
                      </Stack>
                  ))}
        </section>
    );
};

export default ItemList;
