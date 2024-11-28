export const ProductSection = ({ products, purchaseCategory }) => {

  return (
    <section className="product-section wrapper">
      {products &&
        products.length > 0 &&
        products.map((product) => {
          const isPurchased = purchaseCategory.includes(product.Category);

          return (
            <article key={product.ProductID}>
              <figure>
                <img src={product.ImageURL} alt={product.ProductName} />
                <figcaption
                  style={{
                    color: isPurchased ? "red" : "inherit",
                  }}
                >
                  {product.Category}
                </figcaption>
              </figure>
              <div className="product-content">
                <h3>{product.ProductName}</h3>
                <p>₹{product.Price}</p>
              </div>
            </article>
          );
        })}
    </section>
  );
};
