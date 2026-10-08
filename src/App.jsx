import { Link, NavLink, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import Products from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";

function NotFound() {

  //Thanks 

  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">
        Go to Home!
      </Link>
    </div>
  );
}

function App() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
      : "rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold text-blue-700">
            Router Demo
          </Link>
          <div className="flex gap-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/users" className={linkClass}>
              Users
            </NavLink>
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;