import React from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "../App.css";

function Sidebar() {
  const pathName = useLocation().pathname;
  const menus = [
    { name: "홈", path: "/" },
    { name: "학생 관리", path: "/student" },
    { name: "선생님 관리", path: "/teacher" },
    { name: "학부모 관리", path: "/parent" },
  ];

  const menus1 = [
    { name: "축제/행사", path: "/festival" },
    { name: "독서실", path: "/library" },
    { name: "교실(등하교)", path: "/absent" },
  ];

  const menus2 = [
    { name: "문의사항", path: "/question" },
    { name: "관리자 권한", path: "/adminss" },
    { name: "탈퇴", path: "/fire" },
  ];

  return (
    <div className="Sidebar">
      <div>멤버관리</div>
      <ul className="SidebarList">
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index} className="row">
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </Link>
          );
        })}
      </ul>

      <ul className="SidebarList">
        <div>명단관리</div>
        {menus1.map((menu, index) => {
          return (
            <Link to={menu.path} key={index} className="row">
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </Link>
          );
        })}
      </ul>

      <ul className="SidebarList">
        <div></div>
        <br></br>
        <br></br>
        {menus2.map((menu, index) => {
          return (
            <Link to={menu.path} key={index} className="row">
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
