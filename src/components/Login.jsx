import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 ">
        <h1 className="text-2xl font-semibold text-center">
          Login your account
        </h1>
        <form className="card-body space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
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
