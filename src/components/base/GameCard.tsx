import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import React, {useState} from "react";
import albumDefaultPhoto from "../../workingImages/soundcloud_Icon.png";
import './GameCard.scss'

export default function GameCard({card}:any): JSX.Element {


    const navigateToLink: (link: string) => void = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <div className="gameCard" >
            <Card elevation={3} className="gameCardClass">
                <div className="gameCardBody">
                    <div className='gameContentWrapper'>
                            <CardMedia className='gameCardMedia'
                                       image={card.image !== null ? card.image : albumDefaultPhoto}
                                       title={card.gameTitle}/>
                    </div>
                </div>
            </Card>
        </div>

    )
}
