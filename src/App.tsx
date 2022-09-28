import {createTheme, ThemeOptions} from "@mui/material";
import React from 'react';
import './App.css';
import MainContent from "./components/main-page/Content";
import Header from "./components/main-page/Header";

export const BasedTheme: ThemeOptions = createTheme
({
	palette: {
		background: {
			default: '#180c38',
			paper: '#200c36',
		},
		text: {
			primary: '#ffffff',
			secondary: '#a7a7a7',
			disabled: '#5d5d5d',
		},
		primary: {
			main: '#FF00E5',
		},
		secondary: {
			main: '#503657',
		},
		error: {
			main: '#4D0A0D',
			light: '#521A24',
		},
		warning: {
			main: '#671264',
			light: '#7B3278',
		},
		success: {
			main: '#034B6A',
		}
	}
});

function App(): JSX.Element {
	return (
		<div className="App">
			<Header/>
			<MainContent/>
		</div>
	);
}

export default App;
