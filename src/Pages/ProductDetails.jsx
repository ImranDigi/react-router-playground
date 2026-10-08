import { Link, useParams } from "react-router-dom";
import { products } from "../Data/Products";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <Link
          to="/products"
          className="mt-4 inline-block text-blue-600 underline"
        >
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        URL Parameter Example
      </p>

      <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
      <p className="mt-2 text-slate-600">Category: {product.category}</p>
      <p className="text-slate-600">Price: Rs. {product.price}</p>

      <div className="mt-5 rounded-xl bg-slate-100 p-4 font-mono text-sm">
        Current URL param productId = {productId}
      </div>

      <Link to="/products" className="mt-6 inline-block text-blue-600 underline">
        Back to products
      </Link>
    </section>
  );
}

export default ProductDetails;