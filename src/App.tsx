import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import BasePage from "./components/base/BasePage";
import GraphicsPage from "./components/graphics/GraphicPage";
import MainPage from "./components/main-page/MainPage";
import TalantPage from "./components/talant/TalantPage";


export default function App(): JSX.Element {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/base" element={<BasePage/>}/>
					<Route path="/talant" element={<TalantPage/>}/>
					<Route path="/graphics" element={<GraphicsPage/>}/>
					<Route/>
				</Routes>
			</Router>
		</div>
	);
}
