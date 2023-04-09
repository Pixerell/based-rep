import React from "react";
import {AudioPlayer, setupAudio} from "../helpers/audioPlayer";
import './Talant.scss';

export default function Talant(): JSX.Element {

	const {startAudio }: AudioPlayer = setupAudio("/seregaMind.mp3");


	return (
		<div className={'Wrapper'}>
		<img alt={'Talant'} onLoad={startAudio} className={'Talant'}
			 src={'https://avatars.mds.yandex.net/i?id=bdd51bdd809675e15111ce160f94390d-4377652-images-thumbs&n=13'}/>
		</div>

	)
}
