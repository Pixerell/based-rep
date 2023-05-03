import {Card, CardMedia, Typography} from '@mui/material'
import React, {useRef, useState} from "react";
import albumDefaultPhoto from "../../../workingImages/soundcloud_Icon.png";
import './PeopleCard.scss'

export default function PeopleCard({card}:any): JSX.Element {

    const [showNext, setShowNext] = useState(false);

    let handleClick: () => void;
    handleClick = () => {
        setShowNext(!showNext);
        console.log('clicked')
    };

    const cardRef: React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    const handleMouseMove: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card: HTMLDivElement = cardRef.current!;
        const cardRect: DOMRect = card.getBoundingClientRect();
        const cardCenterX: number = cardRect.left + cardRect.width / 2;
        const cardCenterY: number = cardRect.top + cardRect.height / 2;
        const mouseX: number = event.clientX - cardCenterX;
        const mouseY: number = event.clientY - cardCenterY;
        const maxRotation: number = 12;
        const rotationX: number = (maxRotation * mouseY) / (cardRect.height / 2);
        const rotationY: number = (-maxRotation * mouseX) / (cardRect.width / 2);
        card.style.transform = `perspective(1000px) rotateX(${rotationX * -1}deg) rotateY(${rotationY *-1}deg)`;
    };

    const handleMouseLeave: () => void = () => {
        const card: HTMLDivElement = cardRef.current!;
        card.style.transform = 'none';
    };


    return (
        <div id={card.id} className="rootCard"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             onClick={handleClick}
             ref={cardRef}>
            <div className="peopleCard" >
                <Card elevation={3} className="peopleCardClass" >
                    <div className={`blackTint1 ${showNext ? 'nextTint' : ''}`}/>

                    <div className="peopleCardBody">
                        <div className='peopleContentWrapper'>
                            <CardMedia className={`peopleCardMedia ${showNext ? 'prev' : ''}`}
                                       image={card.image !== null ? card.image : albumDefaultPhoto}
                                       title={card.fullName}/>
                            <CardMedia className={`peopleCardMedia peopleCardMedia2  ${showNext ? 'next' : ''}`}
                                       image={card.image2 !== null ? card.image2 : albumDefaultPhoto}
                                       title={card.fullName}/>
                            <div className={`peopleSmallDesc ${showNext ? 'prevSmallDesc' : ''}`}>
                                <Typography className="smallDescText text-stroke">
                                    {card.smallDesc}
                                </Typography>
                            </div>
                        </div>
                        <div className={`peopleBigDesc ${showNext ? 'nextText' : ''}`}>
                            <h1 className="bigDescTextHead text-stroke nextText" >
                                {card.fullName}
                            </h1>
                            <Typography className="bigDescText1 text-stroke nextText" >
                               {card.bigDesc}
                            </Typography>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={`peopleOuter ${showNext ? 'prevPeopleOuter' : ''}`}>
                <Typography className="pseudonym text-stroke">
                    {card.pseudonym}
                </Typography>
                <Typography className="age">
                    {card.age}
                </Typography>
            </div>
        </div>

    )
}
