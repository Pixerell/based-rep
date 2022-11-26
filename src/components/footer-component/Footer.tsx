import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Icon} from "@mui/material";
import React, {useState} from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";
import './Footer.scss';


let showCount : boolean = false;


function Footer(): JSX.Element {

    const [count, setCount] = useState(0);
    const navigate: NavigateFunction = useNavigate();


    const incrementCount = (): void => {
        setCount(count + 1);
        showCount = true;
    };

    return (
        <div className={'Footer'}>
            <div className={'Clicker'}>
                <button className={'ClickerButton'} onClick={incrementCount}>
                    <Icon className={'ButtonIcon'}>
                        <CloseIcon/>
                    </Icon>
                </button>
                <p className={showCount ? 'Counter active' : 'Counter'}>{count}</p>
            </div>
            <div className={"Copyright"} onClick={() => {setTimeout(() => {
                navigate('/about')}, 100)}}>
                © 2022 Rasslabuxa. All rights protected by Allah.
            </div>
            <div className={'Contacts'}>
                Контакты
                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <EmailIcon/>
                    </Icon>
                    <p >regiga9427@probdd.com</p>
                </div>

                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <TelegramIcon/>
                    </Icon>
                    <p>@aboba</p>
                </div>

                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <LocalPhoneIcon/>
                    </Icon>
                    <p>+1 1 1 1 1</p>
                </div>
            </div>


        </div>

    )
}

export default Footer;
