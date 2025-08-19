"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import API from "@/utils/api";
import toast from "react-hot-toast";

const ControllerSignin = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/auth/users", payload);
      if (data?.user) {
        toast.success("Account created successfully!");
        router.replace("/controller/login");
      } else {
        toast.error(data?.error || "Registration failed");
      }
    } catch (error) {
      toast.error(
        typeof error?.response?.data?.error === "string"
          ? error.response.data.error
          : "Registration failed"
      );
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
              <Image className="img-fluid" src="/assets/images/logo.png" alt="register page" width={200} height={60} />
            </div>
            <div className="login-main">
              <form className="theme-form" onSubmit={handleSubmit}>
                <h4>Controller Sign Up</h4>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={payload.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={payload.email}
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
                    value={payload.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>
                </div>
                <p className="mt-4 mb-0">
                  Already have an account?
                  <Link className="ms-2 text-primary" href="/controller/login">
                    Sign in
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

export default ControllerSignin;