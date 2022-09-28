import React from 'react';
import './App.css';
import MainContent from "./components/main-page/Content";
import Header from "./components/main-page/Header";

export default function App(): JSX.Element {
	return (
		<div>
			<Header/>
			<MainContent/>
		</div>
	);
}
