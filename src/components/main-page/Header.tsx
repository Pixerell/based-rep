import {AccessibleForwardOutlined} from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Box, Button, Grid, Icon, Toolbar, Typography
} from "@mui/material";
import React from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";
import './Header.scss';

function Header(): JSX.Element {

	const navigate: NavigateFunction = useNavigate();


	return (
		<Box sx={{flexGrow: 1}}>

			<AppBar position={"static"} className={'AppBar'}>
				<Toolbar className={'Header'}>

					<Icon>
						<AccessibleForwardOutlined/>
					</Icon>

					<Typography
						ml={'2.5vh'}
						fontWeight={'650'}
					>
						Based Place
					</Typography>

					<Box sx={{flexGrow: 1}}>
						<Grid container spacing={0} minHeight={40} maxHeight={40} minWidth={920} display="flex"
							  justifyContent="flex-start" alignContent="center">
							<Grid ml={10} mr={10}>
								<Button onClick={() => navigate('/')} className={'Button'} variant="text"><Typography
									className={'Typography'}>Главная</Typography></Button>
							</Grid>
							<Grid mr={10}>
								<Button onClick={() => navigate('/base')} className={'Button'}
										variant="text"><Typography
									className={'Typography'}>База</Typography></Button>
							</Grid>
							<Grid mr={10}>
								<Button onClick={() => navigate('/talant')} className={'Button'}
										variant="text"><Typography
									className={'Typography'}>Талант</Typography></Button>
							</Grid>
							<Grid mr={10}>
								<Button onClick={() => navigate('/graphics')} className={'Button'}
										variant="text"><Typography
									className={'Typography'}>Графики</Typography></Button>
							</Grid>
						</Grid>
					</Box>


					<Typography
						mr={'2.5vh'}
						fontWeight={'650'}
					>
						Твой ник ебать
					</Typography>
					<Avatar alt="Papich Gaming"
							src="https://lh3.googleusercontent.com/2h24Z51H2xjftUC1BcH6kIj_JFuAtJAc4XlufhGaFtsfRS_s9OrEQb0M2twJxsjeL-cI15EJMO1_TuEnwNMczZXbg2mYe7-dJd9V=w600"/>


				</Toolbar>
			</AppBar>
		</Box>
	)
}

// JSX.Element = export default
export default Header;
