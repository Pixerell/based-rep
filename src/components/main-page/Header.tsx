import {AccessibleForwardOutlined} from "@mui/icons-material";
import {
	AppBar,
	Icon,
	Toolbar, Typography
} from "@mui/material";
import React from 'react';


function Header(): JSX.Element {
	return (
		<AppBar>
			<Toolbar className={'Header'}>
				<Icon>
					<AccessibleForwardOutlined/>
				</Icon>
				<Typography
					ml={'2.5vh'}
					fontWeight={'650'}
				>
					Based Place
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header;
