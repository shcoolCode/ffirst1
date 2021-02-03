import React from "react";

function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="sidebar-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;
