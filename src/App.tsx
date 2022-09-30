import React from 'react';
import './App.css';
import MainContent from "./components/main-page/Content";
import Header from "./components/main-page/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Base from "./components/base/Base";
import Talant from "./components/talant/Talant";
import Graphics from "./components/graphics/Graphics";


export default function App(): JSX.Element {
	return (
		<div>
			<Router>
				<Header/>
				<Routes>
					<Route  path="/" element={<MainContent/>}/>
					<Route path="/base" element={<Base/>}/>
					<Route path="/talant" element={<Talant/>}/>
					<Route path="/graphics" element={<Graphics/>}/>
				</Routes>

			</Router>
		</div>
	);
}
