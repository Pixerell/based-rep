import { Box, Grid } from "@mui/material";
import React, {useEffect, useState} from "react";
import {GAME_CARDS_URL, MUSIC_CARDS_URL, PEOPLE_CARDS_URL} from "../../apiUrls";
import Preloader from "../helpers/preloader-component/Preloader";
import useCardsFetcher from "../helpers/useCardsFetcher";
import useFallbackData from "../helpers/useFallbackDataChecker";
import './Base.scss';
import GameCard from "./baseCards/GameCard";
import MusicCard from "./baseCards/MusicCard";
import PeopleCard from "./baseCards/PeopleCard";
import {baseData} from "./fallbackBaseData";
import Sidebar from "./Sidebar/Sidebar";


function Base(): JSX.Element {

	let {cardsN: musicCardsN, data : musicData} = useCardsFetcher(MUSIC_CARDS_URL)
	let {cardsN: gameCardsN, data: gameData} = useCardsFetcher(GAME_CARDS_URL)
	let {cardsN: peopleCardsN} = useCardsFetcher(PEOPLE_CARDS_URL)
	const [showCards, setShowCards] = useState(false);

	const fallbackData: boolean = useFallbackData(musicData);

	if (fallbackData) {
		musicCardsN = baseData.musicCards;
		gameCardsN = baseData.gameCards;
		peopleCardsN = baseData.peopleCards;
		musicData = true;
		gameData = true;
		console.log("JSON Server is not up, using fallback based page data.")
	}

	useEffect(() => {
		const timer: NodeJS.Timeout = setTimeout(() => {
			setShowCards(true);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	const handleGameCardHover: (event: React.MouseEvent<HTMLDivElement>) => void = (event: React.MouseEvent<HTMLDivElement>) => {
		const hoveredCardFirstChild: ChildNode | null = event.currentTarget.firstChild;
		if (hoveredCardFirstChild instanceof HTMLElement) {
			const hoveredCardId: number = parseInt(hoveredCardFirstChild.id, 10);
			gameCardsN.forEach((card: any) => {
				if (card.id !== hoveredCardId) {
					const cardElement: HTMLElement | null = document.getElementById(`${card.id}`);
					const hoveredCardElement: HTMLElement | null = document.getElementById(`${hoveredCardId}`);
					if (cardElement && hoveredCardElement) {
						cardElement.classList.add("gameCard--strongBlur");
						hoveredCardElement.classList.add("gameCard--focus");
					}
				}
			});
		}
	};

	const handleGameCardLeave: () => void = () => {
		const gameCards: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".gameCard");
		gameCards.forEach((card: HTMLElement) => {
			card.classList.remove("gameCard--strongBlur");
			card.classList.remove("gameCard--focus");
			card.classList.add("gameCard--unblur");
		});
	};

	return (
		<div className={'MegaDivBase'}>
			<Sidebar />
			<div className={'bgBase'}>
				{musicData && gameData ? (
				<div>
					<span className="gameSection">
						<h1 className={'sectionHead'}>
						  Games
						  <div className={'sectionInformation'}>
							  Я верю в то, что игры - высшая форма искусства из-за их особой интерактивности, которой не достичь ни в каком другом медиуме. Ни в коем случае не нажимай на карточки, я точно не добавил торрент файлы честно честно
						  </div>
						</h1>
						<Box className='cardsContainer' padding={2}>
						  <Grid container spacing={2} alignItems="stretch" justifyContent="center">
							  {gameCardsN.map((cardN: any) => (
								  <Grid item key={cardN.id} xs={6} md={4} lg={2}
										onMouseEnter={handleGameCardHover}
										onMouseLeave={handleGameCardLeave}
										className={showCards ? "musicCardWrapper show" : "musicCardWrapper"}
										style={{ transitionDelay: `${cardN.id * 120}ms`, margin: '0 50px' }}>
									  <GameCard card={cardN} />
								  </Grid>
							  ))}
						  </Grid>
						</Box>
					</span>
					<span className="peopleSection">
						<h1 className={'sectionHead'}>People
						  <div className={'sectionInformation'}>Величайшие личности планеты, прошу заметить что все эти личности - буквально я (у меня острая шизофрения)</div>
						</h1>
						<Box className='cardsContainer' padding={2}>
						  <Grid container spacing={2} alignItems="stretch" justifyContent="center">
							  {peopleCardsN.map((cardN: any) => (
								  <Grid item key={cardN.id} xs={6} md={4} lg={3}
										className={showCards ? "musicCardWrapper show" : "musicCardWrapper"}
										style={{ transitionDelay: `${cardN.id * 120}ms`, margin: '30px 60px' }}>
									  <PeopleCard card={cardN} />
								  </Grid>
							  ))}
						  </Grid>
						</Box>
					</span>
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
				</div>
				) :
					<Preloader />
				})
			</div>
		</div>
	);
}

export default Base;
