"use client";
import Link from "next/link";
import React from "react";
import AccountDropdown from "../dashboard/AccountDropdown";

const ControllerHeader = () => {
  return (
    <>
      <div className="controller-nav-header">
      </div>

      <div className="controller-header">
        <header className="controller-top-head container-fluid">
          <div className="controller-nav-control" />
          <div className="controller-header-right">
            <AccountDropdown link="settings-controller" />
          </div>
        </header>
      </div>
    </>
  );
};

export default ControllerHeader;