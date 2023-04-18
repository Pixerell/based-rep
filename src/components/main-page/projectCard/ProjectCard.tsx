import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import React, {useState} from "react";
import albumDefaultPhoto from "../../../workingImages/soundcloud_Icon.png";
import './ProjectCard.scss'

export default function ProjectCard({card}:any): JSX.Element {

    const [isHovering, setIsHovering] = useState(false);

    let hoverTimeout : NodeJS.Timeout;


    const handleMouseEnter: () => void = () => {
        hoverTimeout = setTimeout(() => {
            setIsHovering(true);
            console.log("hover")
        }, 500)
    };

    const handleMouseLeave: () => void = () => {
        clearTimeout(hoverTimeout);
        setIsHovering(false);
        console.log("unhover")

    };

    const navigateToLink: (link: string) => void = (link: string) => {
        window.open(link, "_blank");
    };
    
    return (
        <div className="projectCard" onClick={() => navigateToLink(card.projectLink)}>
            <Card elevation={2} className="cardClass" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="projectCardBody">
                    <CardContent className="cardContents">
                        <Typography gutterBottom variant="h5" component="div" >
                            {card.projectName}
                        </Typography>
                    </CardContent>
                    <div className='contentWrapper'>
                        <div className={`descText ${isHovering ? "animate" : ""}`}>
                            <Typography variant="body1" className="headDescText">
                                {card.projectSmallDesc}
                            </Typography>
                            <Typography variant="body2" className="bigDescText">
                                {card.projectDesc}
                            </Typography>
                            <div>
                                <Typography variant="body2" className="languageDescText">
                                    {card.language}
                                </Typography>
                            </div>

                        </div>
                        <span className={`cardMedia cardMediaOverlay blackTint ${isHovering ? "animate1" : ""}`} />
                        <img alt="cover image card" className={`cardMedia cardMediaOverlay img ${isHovering ? "animate1" : ""}`} src={card.projectImg1 !== null ? card.projectImg1 : albumDefaultPhoto}/>
                        <CardMedia className='cardMedia'
                                   image={card.projectImg !== null ? card.projectImg : albumDefaultPhoto}
                                   title={card.projectName}
                        />
                    </div>
                </div>
            </Card>
        </div>

    )
}
