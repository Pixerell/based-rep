import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const BasedTheme: ThemeOptions = createTheme
({
	palette: {
		background: {
			default: '#180c38',
			paper: '#200c36',
		},
		text: {
			primary: '#000000',
			secondary: '#000000',
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

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
	  <ThemeProvider theme={BasedTheme}>
		  <App />
	  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
