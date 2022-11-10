import {Button, FormControl, TextField} from "@mui/material";
import {useFormControl} from '@mui/material/FormControl';
import React from 'react';
import './styles/AuthorizationPage.scss'


export default function Authorization(): JSX.Element {
	return (
		<div>
			<div className={'page-container'}>
				<div className={'login-panel'}>
					<div className={'background'}>
						<FormControl>
							<TextField
								className={'input-field'}
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
				<div className={'parallax-panel'}>
					yaitsa
				</div>
			</div>
		</div>
	)
}
