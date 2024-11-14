import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email);
    logIn(email, password)
      .then((res) => setUser(res.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 ">
        <h1 className="text-2xl font-semibold text-center">
          Login your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>

        <h2 className="text-center">
          Don't Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-red-500 underline">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
