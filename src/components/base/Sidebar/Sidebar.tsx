import {AccessibleForwardOutlined} from "@mui/icons-material";
import {Button, Icon} from "@mui/material";
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';
import {SidebarData} from "./SidebarData";

export default function Sidebar(): JSX.Element {
    const [sidebar, setSidebar] = useState(false)

    window.onscroll = () => {scrollFunction()};

    function scrollFunction() : void {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        {
            // @ts-ignore
            document.getElementById("side").style.top = "0";
            console.log('moved?')
        }
        else {
            // @ts-ignore
            document.getElementById("side").style.top = "70px";
        }
    }


    const showSidebar: () => void = () => setSidebar(!sidebar)

    const goToSection: (num: number) => void = (num : number) => {
        window.scrollTo({
            top: num,
            behavior: "smooth",
        });
    };

    return (
        <div id={"side"}>
        <div className={sidebar ? 'MegaDiv active' : 'MegaDiv'}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={'nav-menu-items'}>
                    {/* tslint:disable-next-line:typedef */}
                    {SidebarData.map((item, index : number) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Button onClick={() => goToSection(item.nav)} className={'Button'}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
            <div className={sidebar ? 'navbar active' : 'navbar'} onClick={showSidebar}>
                <Link to='#' className={'menu-bars'}>
                    <Icon>
                        <AccessibleForwardOutlined/>
                    </Icon>
                </Link>
            </div>
        </div>
    )
}
