import React from "react";
import './Talant.scss';

export default function Talant(): JSX.Element {
	const audio: HTMLAudioElement = new Audio("/seregaMind.mp3")

	const start1 = () => {
		audio.play()
	}

	audio.addEventListener('ended', function (){
		this.currentTime=0;
		this.play();
	}, false);

	return (
		<div>
		<img alt={'Talant'} onLoad={start1} className={'Talant'} src={'https://avatars.mds.yandex.net/i?id=bdd51bdd809675e15111ce160f94390d-4377652-images-thumbs&n=13'}/>
		</div>

	)
}
