import React from 'react';
import LineChart from "./charts/lineChart";
import './Graphics.scss';


export default function Graphics() : JSX.Element {

	return (
		<div className={'bgBase1'}>
			<span className="lineSection">
				<h1 className={'chartHead'}>
				  Shoegaze-Stats
				  <div className={'chartInfo'}>
					  Этот график показывает развитие шугейза с 1990 по 2002 года
				  </div>
				</h1>
				<div className="lineWrapper">
					<LineChart/>
				</div>
			</span>
		</div>
	)
}
