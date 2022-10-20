import {Icon} from "@mui/material";
import {Headphones, Movie, PsychologyAlt} from "@mui/icons-material";
import React from "react";

export const SidebarData = [
    {
        title: 'Moosic',
        path: '/base',
        icon:   <Icon>
                    <Headphones/>
                </Icon>,
        cName: 'nav-text'
    },
    {
        title: 'Films',
        path: '/base',
        icon:   <Icon>
            <Movie/>
        </Icon>,
        cName: 'nav-text'
    },
    {
        title: 'People',
        path: '/base',
        icon:   <Icon>
            <PsychologyAlt/>
        </Icon>,
        cName: 'nav-text'
    },


]