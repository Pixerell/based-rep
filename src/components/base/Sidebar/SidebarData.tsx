import {Headphones, PsychologyAlt} from "@mui/icons-material";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import {Icon} from "@mui/material";
import React from "react";

export const SidebarData: ({ path: string; nav: number; cName: string; icon: JSX.Element; title: string })[] = [
    {
        title: 'Games',
        path: '/base',
        icon:   <Icon>
                    <VideogameAssetIcon/>
                </Icon>,
        cName: 'nav-text',
        nav: 0
    },
    {
        title: 'People',
        path: '/base',
        icon:   <Icon>
                    <PsychologyAlt/>
                </Icon>,
        cName: 'nav-text',
        nav: 700

    },
    {
        title: 'Moosic',
        path: '/base',
        icon:   <Icon>
                    <Headphones/>
                </Icon>,
        cName: 'nav-text',
        nav: 2000
    },
]
