// @ts-nocheck
import {Button, FormControl, TextField} from "@mui/material";
import {useFormControl} from '@mui/material/FormControl';
import React from 'react';
import './styles/AuthorizationPage.scss'

const card: NodeListOf<Element> = document.querySelector(".cards");
const field: NodeListOf<Element> = document.querySelectorAll(".input-field, .button-auth");
const range: number = 40;

const calcValue: string = (a: number, b: number): string => (a/b*range-range/2).toFixed(1)

let timeout: number;
document.addEventListener('mousemove', ({x, y}: number) => {
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}

	timeout = window.requestAnimationFrame(() => {
		const yValue: string = calcValue(y, window.innerHeight);
		const xValue: string = calcValue(x, window.innerWidth);

		card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

		[].forEach.call(field, (field) => {
			field.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
		});
	})
}, false);

export default function Authorization(): JSX.Element {
	return (
		<div>
			<div className={'page-container'}>
				<div className={'login-panel'}>
					<div className="cards">
						<h1>Добро пожаловать</h1>
						<FormControl>
							<TextField
								className={'input-field login-field'}
								id="filled-required"
								label="Login"
								variant="outlined"
							/>
							<TextField
								className={'input-field'}
								id="filled-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="outlined"
							/>
						</FormControl>
						<Button className={'button-auth'} variant="contained">Регистрация</Button>
						<Button className={'button-auth'} variant="contained">Войти</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
