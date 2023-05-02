import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import About from "./components/about-page/About";
import BasePage from "./components/base/BasePage";
import GraphicsPage from "./components/graphics/GraphicPage";
import MainPage from "./components/main-page/MainPage";
import TalantPage from "./components/talant/TalantPage";


export default function App(): JSX.Element {
	return (
		<div>
			<div id="noise" className={"noise"}/>
			<div id="portal"/>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/base" element={<BasePage/>}/>
					<Route path="/graphics" element={<GraphicsPage/>}/>
					<Route path="/talant" element={<TalantPage/>}/>
					<Route path="/about" element={<About/>}/>
				</Routes>
			</Router>
		</div>
	);
}
