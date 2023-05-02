import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {Icon} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReactDOM from 'react-dom';
import scImage from "../../../workingImages/soundcloud_Icon.png"
import "./ModalTalant.scss";

const style: { border: string; p: number; boxShadow: number; transform: string; bgcolor: string; top: string; left: string; width: number; position: "absolute" } = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModalTalantProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

// tslint:disable-next-line:typedef
const ModalTalant: React.FC<IModalTalantProps> = ({open, onClose, children }) => {
    if (!open) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="ModalWrap">
            <Modal className="ModalTalant"
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <img className="BackgroundImage" src={scImage} alt="Evil virus of satan" />
                    <span className="modalHead">
                        <Typography className="modalHeadText" id="modal-modal-title" variant="h6" component="h2">
                             WARNING
                        </Typography>
                        <Icon className="attentionIcon">
                            <WarningAmberIcon />
                        </Icon>
                    </span>

                    <Typography className="mainTextModal" id="modal-modal-description">
                        {children}
                    </Typography>
                    <Button variant="contained" className="closeBtn" onClick={onClose}>Уйти с честью</Button>

                </Box>
            </Modal>
        </div>,
        // @ts-ignore
        document.getElementById('portal')
    );
};

export default ModalTalant;
