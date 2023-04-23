import {Card, CardMedia, Typography} from '@mui/material'
import React from "react";
import albumDefaultPhoto from "../../../workingImages/soundcloud_Icon.png";
import './GameCard.scss'

export default function GameCard({card}:any): JSX.Element {

    const handleClick: () => void = () => {
        window.location.href = card.torrentFile;
    };

    return (
        <div id={card.id} className="gameCard" onClick={handleClick}>
            <a className="downloadLink" href={card.torrentFile} download="a">
                <Card elevation={3} className="gameCardClass">
                    <div className="gameCardBody">
                        <div className='gameContentWrapper'>
                            <CardMedia className='gameCardMedia'
                                       image={card.image !== null ? card.image : albumDefaultPhoto}
                                       title={card.gameTitle}/>
                            <div className="gameDesc">
                                <Typography className="text text-stroke topText">
                                    {card.gameTitle}
                                </Typography>
                                <Typography className="text text-stroke bottomText">
                                    {card.genre}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Card>
            </a>
        </div>

    )
}
