import { useParams } from "react-router-dom";
import { dummyData } from "../../dummyData/dummyData";
import styles from "./product.module.css";
import { useState } from "react";
import { useCartContext } from "../../context/cart/hooks/useCartContext";

const ProductPage = () => {
  const { category = "kids", productId } = useParams();

  const {addToCart} = useCartContext() 

  const data = dummyData[category.charAt(0).toUpperCase() + category.slice(1)];
  const product = data?.find((item) => item.id === productId);

  const [image, setimage] = useState(product?.img[0]);
  const [itemSize, setItemSize] = useState(null);

  if (!product) return <div>Product not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.switchWrapper}>
          {product.img.map((i, index) => (
            <img
              onClick={() => setimage(i)}
              key={index}
              className={`${styles.switchImage} ${
                image === i ? styles.switchImageActive : ""
              }`}
              src={i}
              alt={`${product.name} preview ${index + 1}`}
            />
          ))}
        </div>

        <img className={styles.mainImage} src={image} alt={product.name} />
      </div>

      <div className={styles.rightSection}>
        <div>
          <h1 className={styles.name}>{product.name.split(" ")[0]}</h1>
          <h1 className={styles.type}>
            {product.name.split(" ")[1]} {product.name.split(" ")[2]}
          </h1>
          <h4 className={styles.sizeText}>SIZE:</h4>
          <div className={styles.sizeButtonWrapper}>
            {["XS", "S", "M", "L"].map((size) => (
              <button
                onClick={() => {
                  setItemSize(size);
                }}
                key={size}
                className={`${styles.sizeBtn} ${
                  itemSize === size ? styles.selected : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className={styles.sizeText}>PRICE:</h4>
          <h4 className={styles.price}>$ {product.price}</h4>
          <button onClick={() => {
            addToCart({
                    ...product,
                    size: itemSize,
                    quantity: 1,
                    image: product.img,
                  });
          }} disabled={!itemSize} className={`${styles.addToCartButton} ${!itemSize && styles.disabledButton}`}>ADD TO CART</button>
          <p className={styles.descritpion}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
