import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';
import {AccessibleForwardOutlined} from "@mui/icons-material";
import {Icon} from "@mui/material";
import {SidebarData} from "./SidebarData";

export default function Sidebar(): JSX.Element {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className={'MegaDiv'}>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className={'nav-menu-items'}>

                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>

                        </li>
                    )
                })}
            </ul>

        </nav>
            <div className={sidebar ? 'navbar active' : 'navbar'}>
                <Link to='#' className={'menu-bars'}>
                    <Icon>
                        <AccessibleForwardOutlined onClick={showSidebar}/>
                    </Icon>
                </Link>
            </div>
        </div>
    )
}