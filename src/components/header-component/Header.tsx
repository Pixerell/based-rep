import {
	AppBar,
	Box,
	Button,
	Grid,
	Toolbar,
	Typography
} from "@mui/material";
import React, {useLayoutEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import pixerellImage from "../../workingImages/pixerell.png"
import './Header.scss';

export default function Header(): JSX.Element {

	const navigate: NavigateFunction = useNavigate();
	const [animationPlayed, setAnimationPlayed] = useState(false);

	useLayoutEffect(() => {
		const isAnimationPlayed: boolean = localStorage.getItem('animationPlayed') === 'true';

		if (isAnimationPlayed !== null && isAnimationPlayed !== undefined && !isAnimationPlayed) {
			console.log("Page prep")
			localStorage.setItem('animationPlayed', 'true');
			setAnimationPlayed(true);
			console.log("Page loaded")
		}

		window.addEventListener('beforeunload', () => {
			localStorage.removeItem('animationPlayed');
			setAnimationPlayed(false);
		});
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }} className={'Header'}>
			<AppBar position={"static"} sx={{ boxShadow: 'none' }} className={'AppBar'}>
				<Toolbar className={`Panel ${animationPlayed ? "animationClass" : ""}`}>
					<div className='imgContainer'>
						<img alt={"Pixerell Icon"} className='pixImg' src={pixerellImage}/>
					</div>
					<Typography ml={'2.5vh'} fontWeight={'650'}>
						Pixerell
					</Typography>
					<Box sx={{ flexGrow: 1 }}>
						<Grid className={"GridMain"} container spacing={0} item sx={{ marginLeft: '-3.5%', marginRight: 2 }} minHeight={40} maxHeight={40} >
							<Grid>
								<Button onClick={() => navigate('/')} className={'Button'} variant="text"><Typography
									className={'Typography'}>Главная</Typography></Button>
							</Grid>
							<Grid >
								<Button onClick={() => navigate('/base')} className={'Button'}
										variant="text"><Typography
									className={'Typography'}>База</Typography></Button>
							</Grid>
							<Grid >
								<Button onClick={() => navigate('/graphics')} className={'Button'}
										variant="text"><Typography
									className={'Typography'}>Графики</Typography></Button>
							</Grid>
							<Grid>
								<Button onClick={() => navigate('/talant')} className={'Button'}
										variant="text"><Typography
									className={'Typography'}>Талант</Typography></Button>
							</Grid>
						</Grid>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
