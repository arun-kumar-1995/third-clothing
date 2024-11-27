const placeholderImage = "https://via.placeholder.com/150";

export const ProductSection = () => {
  return (
    <section className="product-section wrapper">
      <article>
        <figure>
          <img
            src="https://unsplash.it/600/400"
            alt="Blazer product image"
            onError={(e) => (e.target.src = placeholderImage)}
          />

          <figcaption>Outer wear</figcaption>
        </figure>
        <div className="product-content">
          <h3>Blazer</h3>
          <p>₹1499</p>
        </div>
      </article>
      <article>
        <figure>
          <img
            src="https://unsplash.it/600/400?image=501"
            alt="Leather Jacket product image"
            onError={(e) => (e.target.src = placeholderImage)}
          />
          <figcaption>Tops</figcaption>
        </figure>
        <div className="product-content">
          <h3>Leather Jacket</h3>
          <p>₹1999</p>
        </div>
      </article>
    </section>
  );
};
