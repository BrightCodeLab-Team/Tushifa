"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthActionButtons = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <>
      {!session ? (
        <Link href="/auth/login">
          <button className="custom-btn">Login</button>
        </Link>
      ) : (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/get-involved">
            <button className="custom-btn">Get Involved</button>
          </Link>
          <Link href="/donate">
            <button className="custom-btn">Donate</button>
          </Link>
        </div>
      )}
      <style jsx>{`
        .custom-btn {
          background: #e12454;
          color: #fff;
          border: none;
          border-radius: 2rem;
          
          width: 128px;
          height : 48px;
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          outline: none;
        }
        .custom-btn:hover,
        .custom-btn:focus {
          background: #e12454;
        }
      `}</style>
    </>
  );
};

export default AuthActionButtons;