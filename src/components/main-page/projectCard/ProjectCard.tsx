import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import React, {useState} from "react";
import albumDefaultPhoto from "../../../workingImages/soundcloud_Icon.png";
import './ProjectCard.scss'

export default function ProjectCard({card}:any): JSX.Element {

    const [isHovering, setIsHovering] = useState(false);

    // tslint:disable-next-line:typedef
    let hoverTimeout;

    const handleMouseEnter: () => void = () => {
        hoverTimeout = setTimeout(() => {
            setIsHovering(true);
            console.log("hover")
        }, 450)
    };

    const handleMouseLeave: () => void = () => {
        clearTimeout(hoverTimeout);
        setIsHovering(false);
        console.log("unhover")

    };
    

    return (
        <div className="projectCard">
            <Card elevation={2} className="cardClass" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="projectCardBody">
                    <CardContent className="cardContents">
                        <Typography gutterBottom variant="h5" component="div" >
                            {card.projectName}
                        </Typography>
                    </CardContent>
                    <div className='contentWrapper'>
                        <Typography variant="body2" className={`smallDescText ${isHovering ? "animate" : ""}`}>
                            {card.projectSmallDesc}
                        </Typography>
                        <span className={`cardMedia cardMediaOverlay blackTint ${isHovering ? "animate1" : ""}`} />
                        <img alt="cover image card" className={`cardMedia cardMediaOverlay img ${isHovering ? "animate1" : ""}`} src={card.projectImg !== null ? card.projectImg : albumDefaultPhoto}/>
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
