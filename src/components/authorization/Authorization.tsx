// @ts-nocheck
import {Button, FormControl, TextField} from "@mui/material";
import {useFormControl} from '@mui/material/FormControl';
import React from 'react';
import './styles/AuthorizationPage.scss'

const cards: Element | null = document.querySelector(".cards");
const images: NodeListOf<Element> = document.querySelectorAll(".card__img");
const backgrounds: NodeListOf<Element> = document.querySelectorAll(".card__bg");
const range: number = 40;

// // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
// const calcValue = (a: number, b: number) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx
//
// let timeout: number;
// document.addEventListener('mousemove', ({x, y}) => {
// 	if (timeout) {
// 		window.cancelAnimationFrame(timeout);
// 	}
//
// 	timeout = window.requestAnimationFrame(() => {
// 		const yValue: string = calcValue(y, window.innerHeight);
// 		const xValue: string = calcValue(x, window.innerWidth);
//
// 		cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
//
// 		[].forEach.call(images, (image) => {
// 			image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
// 		});
//
// 		[].forEach.call(backgrounds, (background) => {
// 			background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
// 		})
// 	})
// }, false);

export default function Authorization(): JSX.Element {
	return (
		<div>
			<div className={'page-container'}>
				<div className={'login-panel'}>
					<div className={'login-container'}>
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
							<div>
								<Button variant="contained">Регистрация</Button>
								<Button variant="contained">Войти</Button>
							</div>
						</FormControl>
					</div>
				</div>
			</div>
		</div>
	)
}
