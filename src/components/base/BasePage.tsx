import React from 'react';
import Header from "../header-component/Header";
import Base from "./Base";

export default function BasePage(): JSX.Element {
	return (
		<div>
			<Header/>
			<Base/>
		</div>
	)
}
