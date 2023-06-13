import styles from "./Home.module.css";
import imgLogo from "./assets/images/zapas.png";

export const Home = () => {
    let edad = 2 + 2;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Este es el home</h1>
            <h3>{edad}</h3>
            <img
                className={styles.imgcloud}
                src="https://res.cloudinary.com/dkllw6ea8/image/upload/v1686699999/samples/ecommerce/car-interior-design.jpg"
                alt=""
            />
        </div>
    );
};
