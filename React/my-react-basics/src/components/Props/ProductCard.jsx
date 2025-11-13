function ProductCard({ productName, price, rating, inStock, image, category }) {
  const status = inStock ? "Available" : "Sold Out";
  const color = inStock ? "greenColor" : "redColor";
  const isHighlyRated = rating >= 4;

  return (
    <div className="product-card">
      <img src={image} alt={productName} />
      <p>Product Name: {productName}</p>
      <p>Price: ₹ {price.toLocaleString()}</p>
      <p>Rating: {rating}</p>
      {isHighlyRated && <p className="badge">⭐ Highly Rated</p>}
      <p>
        Instock: <span className={color}>{status}</span>
      </p>
      <p>Category: {category}</p>
    </div>
  );
}
export default ProductCard;
