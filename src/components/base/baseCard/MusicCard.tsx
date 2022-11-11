import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
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
import './MusicCard.scss'

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


// @ts-ignore
// tslint:disable-next-line:typedef
export default function MusicCard({card}): JSX.Element {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick: () => void = () => {
        setExpanded(!expanded);
    };

    return (
            <div>
               <Card elevation={3} className={"Card"}>
                   <CardMedia className={"AlbumCover"}
                       component="img"
                       image={card.avatar}
                       alt={card.album}

                   />
                   <CardHeader className={"CardHeader"}
                       title={card.album}
                       titleTypographyProps={{ color: 'white' }}
                       subheader={card.genre}
                       />

                   <CardContent>
                       <Typography variant="body2" color="textSecondary">
                           {card.details}
                       </Typography>
                   </CardContent>

                   <CardActions disableSpacing>
                       <ExpandMore
                           expand={expanded}
                           onClick={handleExpandClick}
                           aria-expanded={expanded}
                           aria-label="show more"
                       >
                           <ExpandMoreIcon color="primary"/>
                       </ExpandMore>
                   </CardActions>
                   <Collapse in={expanded} timeout="auto" unmountOnExit>
                       <CardContent>
                           <Typography paragraph className={'TypographyDetails'}>
                               {card.details}
                           </Typography>
                       </CardContent>
                   </Collapse>
               </Card>
            </div>
    )
}
