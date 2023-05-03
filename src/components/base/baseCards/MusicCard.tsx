import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse, IconButton,
    IconButtonProps, styled,
    Typography
} from "@mui/material";
import React from "react";
import artistDefaultPhoto from '../../../workingImages/pixerell.png';
import albumDefaultPhoto from '../../../workingImages/soundcloud_Icon.png';
import './MusicCard.scss';


interface IExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

// tslint:disable-next-line:typedef
const ExpandMore = styled((props: IExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
// tslint:disable-next-line:typedef
})(({theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


// tslint:disable-next-line:typedef
export default function MusicCard({card}): JSX.Element {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick: () => void = () => {
        setExpanded(!expanded);
    };


    return (
            <div className={"MusicCard"}>
               <Card elevation={3} className={"CardWrap"}>
                   <CardMedia className={"AlbumCover"}
                       component="img"
                       image={card.avatar !== null ? card.avatar : albumDefaultPhoto}
                       alt={card.album}
                   />
                   <CardHeader className={"CardHeader"}
                       title={card.album}
                       titleTypographyProps={{ color: 'white' }}
                               subheaderTypographyProps={{color:'white'}}
                       subheader={card.artist +  " - " + card.genre}
                   />
                   <CardContent>
                       <Typography variant="body2" className={"CardSmallDesc"}>
                           {card.smallDesc}
                       </Typography>
                   </CardContent>
                   <CardActions disableSpacing>
                       <ExpandMore
                           expand={expanded}
                           onClick={handleExpandClick}
                           aria-expanded={expanded}
                           aria-label="show more"
                       >
                           <ExpandMoreIcon className="expandIcon"/>
                       </ExpandMore>
                   </CardActions>
                   <Collapse in={expanded} timeout="auto" unmountOnExit>
                       <CardContent>
                           <Typography paragraph className={'TypographyDetails'}>
                               {card.details}
                           </Typography>
                           <div className={"afterDetails"}>
                               <Avatar alt={card.artist} src={card.artist_avatar !== null ? card.artist_avatar : artistDefaultPhoto} />
                               <a rel={'noreferrer'} target={'_blank'} href={card.link} className={"albumLink"}>Слушать альбом</a>
                           </div>
                       </CardContent>
                   </Collapse>
               </Card>
            </div>
    )
}
