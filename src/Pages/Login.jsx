import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // ✅ handleLogin form submit pe chalega
  function handleLogin(e) {
    e.preventDefault();

    // inputs ki values uthao (name attribute se)
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simple validation (apna logic laga sakte ho)
    if (email && password) {
      alert("Login Successful!");
      navigate("/Home"); // 🚀 redirect
    } else {
      alert("Please fill all fields");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-xl p-6 shadow">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {/* ✅ Form ke andar inputs + onSubmit */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;