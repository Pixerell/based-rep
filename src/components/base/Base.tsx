import { Box, Grid } from "@mui/material";
import React from "react";
import {MUSIC_CARDS_URL} from "../../apiUrls";
import Preloader from "../helpers/preloader-component/Preloader";
import useCardsFetcher from "../helpers/useCardsFetcher";
import './Base.scss';
import MusicCard from "./baseCard/MusicCard";
import Sidebar from "./Sidebar/Sidebar";

function Base(): JSX.Element {

	const {cardsN, data} = useCardsFetcher(MUSIC_CARDS_URL)

	return (
		<div className={'MegaDivBase'}>
			<Sidebar />
			<div className={'bgBase'}>
				{data ? (
					<span>
            <h1 className={'musicHead'}>
              Music
              <div className={'musicInformation'}>
                Никогда не задумывались какую музыку слушают настоящие гигачады база-шлёппы?
                Попробуй один из альбомов снизу, чтобы проникнуться этим вкусом свободы.
              </div>
            </h1>
            <Box padding={2}>
              <Grid container spacing={3} alignItems="stretch">
				  {/* tslint:disable-next-line:typedef */}
                {cardsN.map(cardN => (
					<Grid item key={cardN.id} xs={6} md={4} lg={2}>
						<MusicCard card={cardN} />
					</Grid>
				))}
              </Grid>
            </Box>
          </span>
				) :
					<Preloader />
				})
			</div>
		</div>
	);
}

export default Base;
