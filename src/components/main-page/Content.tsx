import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from 'react';
import './styles/Content.scss';

function MainContent(): JSX.Element {
	return (
		<div>
			<Box sx={{flexGrow: 1}}
				 margin={'2vh'}
				 display={'flex'}
				 justify-content={'center'}
				 align-content={'center'}
				 align-items={'center'}
			>
				<Grid container spacing={12}
					  mb={'2vh'}
				>
					<Grid item xs={1} md={2}>
						<Card>
							<CardMedia
								component="img"
								height="160"
								image="https://s5o.ru/storage/simple/cyber/edt/2e/c6/76/af/cybere6700a25acc.jpg"
								alt="Nikita DuckSuck"
							/>
							<CardContent
								className={'Card'}
							>
								<Typography gutterBottom variant={'h5'}>
									Человек Яйца
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={1} md={2}>
						<Card>
							<CardMedia
								component="img"
								height="160"
								image="https://s5o.ru/storage/simple/cyber/edt/2e/c6/76/af/cybere6700a25acc.jpg"
								alt="Nikita DuckSuck"
							/>
							<CardContent
								className={'Card'}
							>
								<Typography gutterBottom variant={'h5'}>
									Человек Яйца
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={1} md={4}>
						<Card>
							<CardMedia
								component="img"
								height="160"
								image="https://s5o.ru/storage/simple/cyber/edt/2e/c6/76/af/cybere6700a25acc.jpg"
								alt="Nikita DuckSuck"
							/>
							<CardContent
								className={'Card'}
							>
								<Typography gutterBottom variant={'h5'}>
									Человек Яйца
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{flexGrow: 1}}
				 margin={'2vh'}
				 display={'flex'}
				 justify-content={'center'}
				 align-content={'center'}
				 align-items={'center'}
			>
				<Grid container spacing={12}
					  mb={'2vh'}
				>
					<Grid item xs={1} md={2}>
						<Card>
							<CardMedia
								component="img"
								height="160"
								image="https://s5o.ru/storage/simple/cyber/edt/2e/c6/76/af/cybere6700a25acc.jpg"
								alt="Nikita DuckSuck"
							/>
							<CardContent
								className={'Card'}
							>
								<Typography gutterBottom variant={'h5'}>
									Человек Яйца
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={1} md={2}>
						<Card>
							<CardMedia
								component="img"
								height="160"
								image="https://s5o.ru/storage/simple/cyber/edt/2e/c6/76/af/cybere6700a25acc.jpg"
								alt="Nikita DuckSuck"
							/>
							<CardContent
								className={'Card'}
							>
								<Typography gutterBottom variant={'h5'}>
									Человек Яйца
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={1} md={4}>
						<Card>
							<CardMedia
								component="img"
								height="160"
								image="https://s5o.ru/storage/simple/cyber/edt/2e/c6/76/af/cybere6700a25acc.jpg"
								alt="Nikita DuckSuck"
							/>
							<CardContent
								className={'Card'}
							>
								<Typography gutterBottom variant={'h5'}>
									Человек Яйца
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</div>

)
}

export default MainContent;
