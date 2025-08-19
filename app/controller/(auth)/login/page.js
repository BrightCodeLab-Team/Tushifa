"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const ControllerLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Login successful!");
        router.replace("/controller/dashboard");
      }
    } catch {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth">
      <div id="main-wrapper" className="show">
        <div className="login-tabib">
          <div>
            <div className="text-center">
              <Image className="img-fluid" src="/assets/images/logo.png" alt="login page" width={200} height={60} />
            </div>
            <div className="login-main">
              <form className="theme-form" onSubmit={handleSubmit}>
                <h4>Controller Login</h4>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={userInfo.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="*********"
                    value={userInfo.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <p className="mt-4 mb-0">
                  {"Don't have an account?"}
                  <Link className="ms-2 text-primary" href="/controller/register">
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ControllerLogin;