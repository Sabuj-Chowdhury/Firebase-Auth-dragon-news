import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 ">
        <h1 className="text-2xl font-semibold text-center mt-5">
          Register your account
        </h1>
        <hr className="mt-10" />
        <form className="card-body space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          <h2>
            <input className="mr-2" type="checkbox" name="" id="" />
            Accept <em>Term & Conditions</em>
          </h2>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
