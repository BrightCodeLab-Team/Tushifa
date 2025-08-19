"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const ControllerSidebar = () => {
  const menu = [
    {
      label: "Patient Stories",
      path: "#",
      icon: "fas fa-book-medical",
      hasSubmenu: true,
      subMenu: [
        { label: "New Story", path: "/controller/dashboard" },
      ],
    },
  ];

  return (
    <aside className="left-panel nicescroll-box">
      <nav className="navigation">
        <ul className="list-unstyled main-menu">
          {menu.map((item, index) => (
            <li className="has-submenu" key={index}>
              <div className="itemWrapper has-arrow">
                <i className={item.icon}></i>
                <span className="nav-label">{item.label}</span>
              </div>
              <ul
                className="list-unstyled subMenu"
                style={{
                  height: item.subMenu?.length * 58,
                  visibility: "visible",
                  opacity: 1,
                }}
              >
                {item.subMenu?.map((sub, i) => (
                  <li style={{ paddingLeft: 40 }} key={i}>
                    <Link href={sub.path} className="itemWrapper">
                      <span>{sub.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-widgets">
        <div className="top-sidebar box-shadow mx-25 m-b-30 p-b-20 text-center">
          <Image
            src="/assets/images/appointement.svg"
            className="side-img"
            alt="img"
            width={200}
            height={120}
          />
        </div>
        <div className="copyright text-center">
          <p className="mb-0">Tushifa © 2023</p>
        </div>
      </div>
    </aside>
  );
};

export default ControllerSidebar;
