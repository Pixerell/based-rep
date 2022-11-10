import React from 'react'
import './Base.scss';
import BaseCard from "./baseCard/BaseCard";
import Sidebar from "./Sidebar/Sidebar";


function Base(): JSX.Element {

	return (
			<div className={'MegaDivBase'}>
				<Sidebar/>
				<BaseCard/>
			</div>

	)
}

export default Base;
