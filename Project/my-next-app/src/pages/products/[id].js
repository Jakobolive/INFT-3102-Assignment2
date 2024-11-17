import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Construct the API URL with the dynamic product ID
      const apiUrl = `http://localhost:1337/api/products?filters[id][$eq]=${id}`;

      // Fetch product details based on product ID
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.data && data.data.length > 0) {
            setProduct(data.data[0]); // Set product data if it's available
          } else {
            setProduct(null); // No product found for the given ID
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>Product Details for: {product.productName}</h1>
      <div className="data-details">
        <img
          src={
            product?.productImage?.formats?.thumbnail?.url
              ? `http://localhost:1337${product.productImage.formats.thumbnail.url}`
              : '/fallback-image.jpg' // Fallback if no image is available
          }
          alt={product?.productName || 'Product Image'}
          className="data-image"
        />
        <h1 className="data-title">{product.productName}</h1>
        <h3 className="data-price">Price: ${product.productPrice}</h3>
        <h3 className="data-stock">
          {product.productStock > 0 ? `In Stock (${product.productStock})` : 'Out of Stock'}
        </h3>
        <p className="data-description">{product.productDescription}</p>
      </div>
    </div>
  );
}
