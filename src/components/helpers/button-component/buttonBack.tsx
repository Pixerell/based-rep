import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {Icon} from "@mui/material";
import React from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import './buttonBack.scss';

interface IButtonBackProps {
    urlNav: string;
}


function ButtonBack({urlNav} : IButtonBackProps) :JSX.Element {

    const navigate: NavigateFunction = useNavigate();

    return (
        <span className={"backButtonWrap"} onClick={() => navigate(urlNav)}>
            <Icon className="backIcon">
                <ArrowBackIosNewOutlinedIcon />
            </Icon>
        </span>

    );
}

export default ButtonBack;
