import {Headphones, Movie, PsychologyAlt} from "@mui/icons-material";
import {Icon} from "@mui/material";
import React from "react";

// tslint:disable-next-line:typedef
export const SidebarData  = [
    {
        title: 'Moosic',
        path: '/base',
        icon:   <Icon>
                    <Headphones/>
                </Icon>,
        cName: 'nav-text',
        nav: 0
    },
    {
        title: 'Films',
        path: '/base',
        icon:   <Icon>
            <Movie/>
        </Icon>,
        cName: 'nav-text',
        nav: 400

    },
    {
        title: 'People',
        path: '/base',
        icon:   <Icon>
            <PsychologyAlt/>
        </Icon>,
        cName: 'nav-text',
        nav: 800

    },


]
