import {AccessibleForwardOutlined} from "@mui/icons-material";
import {
	AppBar,
	Box, Button, Grid, Icon, Toolbar, Typography
} from "@mui/material";
import React from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import './Header.scss';


export default function Header(): JSX.Element {

	const navigate: NavigateFunction = useNavigate();
	return (
		<Box sx={{flexGrow: 1}} className={'Header'}>
			<AppBar position={"static"} className={'AppBar'}>
				<Toolbar className={'Panel'}>
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
