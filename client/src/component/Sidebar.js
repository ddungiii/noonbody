import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css"
import SidebarItem from "./SidebarItem";

function Sidebar() {
    const menus = [
        { name: "SORT", path: "/"},
        { name: "FILTERING", path: "/"}
    ];

    return(
        <div className="sidebar">
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem
                            menu={menu}
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default Sidebar;