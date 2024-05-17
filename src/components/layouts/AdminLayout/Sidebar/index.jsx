import './Sidebar.scss'
import { RxDashboard } from "react-icons/rx";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineCategory, MdOutlineChatBubbleOutline } from "react-icons/md";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const paths = useLocation().pathname.split('/');

    const sidebarList = [
        {
            name: "Dashboard",
            link: "",
            icon: <RxDashboard size={25} />
        },
        {
            name: "Order",
            link: "order",
            icon: <RiBillLine size={25} />
        },
        {
            name: "Inventory",
            link: "inventory",
            icon: <MdOutlineInventory2 size={25} />
        },
        {
            name: "Product",
            link: "product",
            icon: <RiProductHuntLine size={25} />
        },
        {
            name: "Category",
            link: "category",
            icon: <MdOutlineCategory size={25} />
        },
        {
            name: "Chat",
            link: "chat",
            icon: <MdOutlineChatBubbleOutline size={25} />
        }
    ];
    const menuList = sidebarList.map((item, index) => {
        return (
            <div className={`menu-item ${paths[paths.length - 1] === item.link ? 'active' : ''}`}
                key={index}
                onClick={() => {
                    navigate(item.link)
                }}
            >
                {item.icon}
                {item.name}
            </div>
        )
    })
    return (
        <div className='sidebar'>
            <div className='menu'>
                {menuList}
            </div>
        </div>
    )
}

export default Sidebar;