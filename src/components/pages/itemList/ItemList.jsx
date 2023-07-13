import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
    return (
        <section
            style={{
                marginTop: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }}
        >
            {items.map((item) => {
                return <ProductCard key={item.id} item={item} />;
            })}
        </section>
    );
};

export default ItemList;
