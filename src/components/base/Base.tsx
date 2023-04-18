import { Box, Grid } from "@mui/material";
import React, {useEffect, useState} from "react";
import {GAME_CARDS_URL, MUSIC_CARDS_URL} from "../../apiUrls";
import Preloader from "../helpers/preloader-component/Preloader";
import useCardsFetcher from "../helpers/useCardsFetcher";
import './Base.scss';
import MusicCard from "./baseCards/MusicCard";
import GameCard from "./GameCard";
import Sidebar from "./Sidebar/Sidebar";

function Base(): JSX.Element {

	const {cardsN: musicCardsN, data : musicData} = useCardsFetcher(MUSIC_CARDS_URL)
	const {cardsN: gameCardsN, data: gameData} = useCardsFetcher(GAME_CARDS_URL)
	const [showCards, setShowCards] = useState(false); // State to track card visibility

	useEffect(() => {
		const timer: NodeJS.Timeout = setTimeout(() => {
			setShowCards(true);
		}, 300); // Set a delay of 1 second (1000ms) to show the cards
		return () => clearTimeout(timer); // Cleanup the timer on unmount
	}, []);

	return (
		<div className={'MegaDivBase'}>
			<Sidebar />
			<div className={'bgBase'}>
				{musicData && gameData ? (
				<div>
					<span className="musicSection">
						<h1 className={'sectionHead'}>
						  Music
						  <div className={'sectionInformation'}>
							Никогда не задумывались какую музыку слушают настоящие гигачады база-шлёппы?
							Попробуй один из альбомов снизу, чтобы проникнуться этим вкусом свободы.
						  </div>
						</h1>
						<Box padding={2} className="cardsContainer">
						  <Grid container spacing={3} alignItems="stretch">
							  {musicCardsN.map((cardN: any) => (
								  <Grid item key={cardN.id} xs={6} md={4} lg={2}
										className={showCards ? "musicCardWrapper show" : "musicCardWrapper"}
										style={{ transitionDelay: `${cardN.id * 120}ms` }}>
									  <MusicCard card={cardN} />
								  </Grid>
							  ))}
						  </Grid>
						</Box>
				  </span>
					<span className="gameSection">
						<h1 className={'sectionHead'}>
						  Games
						  <div className={'sectionInformation'}>
							  Я верю в то, что игры - высшая форма искусства из-за их особой интерактивности, которой не достичь ни в каком другом медиуме.
						  </div>
						</h1>
						<Box className='cardsContainer' padding={2}>
						  <Grid container spacing={3} alignItems="stretch">
							  {gameCardsN.map((cardN: any) => (
								  <Grid item key={cardN.id} xs={6} md={4} lg={2}
										className={showCards ? "musicCardWrapper show" : "musicCardWrapper"}
										style={{ transitionDelay: `${cardN.id * 120}ms` }}>
									  <GameCard card={cardN} />
								  </Grid>
							  ))}
						  </Grid>
						</Box>
					</span>
					<span>

					</span>
				</div>

				) :
					<Preloader />
				})
			</div>
		</div>
	);
}

export default Base;
