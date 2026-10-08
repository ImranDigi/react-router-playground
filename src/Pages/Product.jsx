import { Link, useSearchParams } from "react-router-dom";
import { products } from "../Data/Products";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function updateSearch(value) {
    setSearchParams({
      q: value,
      category,
    });
  }

  function updateCategory(value) {
    setSearchParams({
      q: searchText,
      category: value,
    });
  }

  function clearFilters() {
    setSearchParams({});
  }

  return (
    <section>
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="rounded-2xl flex gap-2 bg-white p-8 shadow-sm">
  {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => updateSearch(e.target.value)}
        className="mt-2 w-80 rounded-lg border p-2"
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
        className="mt-2 w-80 rounded-lg border p-2"
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      {/* Clear Button */}
      <button
        onClick={clearFilters}
        className="mt-2 border rounded-lg px-4 py-2 text-black"
      >
        Clear Filters
      </button>
      </div>
      

      {/* Products Grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-1 text-slate-600">Category :{product.category}</p>
            <p className="text-sm text-slate-500">Price: Rs. {product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
