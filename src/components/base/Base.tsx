import React from "react";
import './Base.scss';
import Sidebar from "./Sidebar/Sidebar";


function Base(): JSX.Element {
	return (
			<div className={'MegaDivBase'}>
				<Sidebar/>
				<div className={'BaseContent'}/>
				<div className={'BaseContent2'}/>

			</div>

	)
}

export default Base;
