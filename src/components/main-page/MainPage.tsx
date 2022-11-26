import React from 'react';
import MainContent from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function MainPage(): JSX.Element {
	
	return (
		<div>
			<Header/>
			<MainContent/>
			<Footer/>
		</div>
	) 
}
