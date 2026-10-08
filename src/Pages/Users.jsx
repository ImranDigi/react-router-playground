import { Link } from "react-router-dom";
import {users} from "../data/users";
function Users() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Users</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="mt-1 text-slate-600">{user.role}</p>
            <p className="text-sm text-slate-500">{user.city}</p>

            <Link
              to={`/users/${user.id}`}
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

export default Users;