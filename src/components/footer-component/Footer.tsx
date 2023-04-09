import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Icon} from "@mui/material";
import React, {useState} from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";
import './Footer.scss';


function Footer(): JSX.Element {


    const [count, setCount] = useState(0);
    const navigate: NavigateFunction = useNavigate();
    const [showCount, setShowCount] = useState(false);


    // tslint:disable-next-line:typedef
    const incrementCount = (): void => {
        setCount(count + 1);
        // tslint:disable-next-line:typedef
        setShowCount(showCount => !showCount);
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
                    <p >alexmegaflexer@gmail.com</p>
                </div>

                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <TelegramIcon/>
                    </Icon>
                    <p>@YiMisc</p>
                </div>

                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <SurroundSoundIcon/>
                    </Icon>
                    <a rel={'noreferrer'} target={'_blank'} href={'https://soundcloud.com/user-389858854'}>Pixerell</a>
                </div>
            </div>


        </div>

    )
}

export default Footer;
