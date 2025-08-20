"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import API from "@/utils/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Register = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await API.post("/auth/users", payload);

      if (data?.user) {
        toast.success("Account created successfully!");

        // ✅ Auto sign-in after registration
        const res = await signIn("credentials", {
          email: payload.email,
          password: payload.password,
          redirect: false,
        });

        if (res?.error) {
          toast.error("Account created, but login failed. Please log in manually.");
          router.replace("/auth/login");
          return;
        }

        // Redirect user by role
        if (data.user.role === "admin") {
          router.replace("/dashboard");
        } else if (data.user.role === "pharmacist") {
          router.replace("/dashboard-pharmacy");
        } else {
          router.replace("/");
        }
      } else {
        toast.error(
          typeof data?.error === "string"
            ? data.error
            : JSON.stringify(data?.error) || "Registration failed"
        );
      }
    } catch (error) {
      toast.error(
        typeof error?.response?.data?.error === "string"
          ? error.response.data.error
          : JSON.stringify(error?.response?.data?.error) || "Registration failed"
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
              <Image
                className="img-fluid"
                src="/assets/images/logo.png"
                alt="register page"
                width={200}
                height={60}
              />
            </div>
            <div className="login-main">
              <form className="theme-form" onSubmit={handleSubmit}>
                <h4>Create your account</h4>
                <p>Enter your personal details to create account</p>

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
                  <div className="form-input position-relative">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="*********"
                      value={payload.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="show-hide">
                      <span className="show"></span>
                    </div>
                  </div>
                </div>

                <div className="form-group mb-0">
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox" required />
                    <label className="text-muted" htmlFor="checkbox1">
                      Agree with{" "}
                      <a className="ms-2 text-primary" href="#">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
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
                  <Link className="ms-2 text-primary" href="/auth/login">
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

export default Register;
