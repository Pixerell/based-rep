import React from 'react';
import Footer from "../footer-component/Footer";
import Header from "../header-component/Header";
import MainContent from "./Content";

export default function MainPage(): JSX.Element {
	
	return (
		<div>
			<Header/>
			<MainContent/>
			<Footer/>
		</div>
	) 
}
