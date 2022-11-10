import {FormControl, TextField} from "@mui/material";
import { useFormControl } from '@mui/material/FormControl';
import React from 'react';
import './styles/AuthorizationPage.scss'


export default function Authorization(): JSX.Element {
	return (
		<div>
			<div className={'page-container'}>
				<div className={'login-panel'}>
					<div>
						<FormControl>
							<TextField
								id="filled-required"
								label="Login"
								defaultValue="Hello World"
								variant="filled"
							/>
							<TextField
								id="filled-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="filled"
							/>
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
