import React from 'react';
import AreaCoinChart from "./charts/areaChart";
import LineChart from "./charts/lineChart";
import './Graphics.scss';


export default function Graphics() : JSX.Element {

	return (
		<div className={'bgBase1'}>
			<span className="lineSection">
				<h1 className={'chartHead'}>
				  Shoegaze-Stats
				  <div className={'chartInfo'}>
					  Этот график показывает развитие шугейза с 1990 по 2002 года. Кликни для более детальной информации
				  </div>
				</h1>
				<div className="lineWrapper">
					<LineChart/>
				</div>
			</span>
			<span className="lineSection areaC">
				<h1 className={'chartHead'}> Симулятор цены на щиткоин
					<div className={'chartInfo'}>
					  	Если вы когда-нибудь задумывались каким образом определяются цены на дешёвые криптовалюты, то понажимайте на "Генерировать".
				  </div>
				</h1>
				<div className="lineWrapper">
					<AreaCoinChart/>
				</div>
			</span>
		</div>
	)
}
