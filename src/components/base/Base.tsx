import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Preloader from "../helpers/preloader-component/Preloader";
import './Base.scss';
import MusicCard from "./baseCard/MusicCard";
import Sidebar from "./Sidebar/Sidebar";

function Base(): JSX.Element {
	const [cardsN, setCards] = useState<any[]>([]);
	const [data, setData] = useState(false);

	useEffect(() => {
		fetch('http://localhost:8000/musicCards')
			// tslint:disable-next-line:typedef
			.then(res => res.json())
			// tslint:disable-next-line:typedef
			.then(data => {
				setCards(data);
				setData(true);
			});
	}, []);


	return (
		<div className={'MegaDivBase'}>
			<Sidebar />
			<div className={'bg'}>
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
