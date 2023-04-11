import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import albumDefaultPhoto from "../../../workingImages/soundcloud_Icon.png";
import './ProjectCard.scss'

export default function ProjectCard({card}:any): JSX.Element {
    return (
        <div className="projectCard">
            <Card elevation={2} className="cardClass" sx={{ minWidth: 380, opacity: 0.95, padding: 0, margin:0, }}  >
                <div className="projectCardBody">
                    <CardContent className="cardContents">
                        <Typography gutterBottom variant="h5" component="div" >
                            {card.projectName}
                        </Typography>
                    </CardContent>
                    <CardMedia className='cardMedia'
                        sx={{ height: 300, width: '100%'  }}
                        image={card.projectImg !== null ? card.projectImg : albumDefaultPhoto}
                        title={card.projectName}
                    />
                </div>
            </Card>
        </div>

    )
}
