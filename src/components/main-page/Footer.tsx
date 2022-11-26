import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Icon} from "@mui/material";
import React, {useState} from 'react';
import './styles/Footer.scss';

let showCount : boolean = false;


function Footer(): JSX.Element {

    const [count, setCount] = useState(0);

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
            <div className={'Contacts'}>
                Контакты
                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <EmailIcon/>
                    </Icon>
                    <p>regiga9427@probdd.com</p>
                </div>

                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <TelegramIcon/>
                    </Icon>
                    <p>regiga9427@probdd.com</p>
                </div>

                <div className={'ContactItems'}>
                    <Icon className={'ItemIcon'}>
                        <LocalPhoneIcon/>
                    </Icon>
                    <p>regiga9427@probdd.com</p>
                </div>
            </div>

        </div>

    )
}

export default Footer;
