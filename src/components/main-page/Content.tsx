import {StyledComponent} from "@emotion/styled";
import {Container, Grid, Paper, styled, ThemeProvider} from "@mui/material";
import React from 'react';

export interface IContent {

}


const Img = styled('img')({
	margin: 'auto',
	display: 'block',
});

function MainContent(): JSX.Element {

	return (
		<ThemeProvider theme={'BasedTheme'}>
			<Paper>
				<Container maxWidth={"sm"}>
					<Grid container spacing={12}>

					</Grid>
				</Container>
			</Paper>
		</ThemeProvider>
	)
}

export default MainContent;
