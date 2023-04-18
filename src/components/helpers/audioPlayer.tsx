export type AudioPlayer = {
    startAudio: () => void;
};

export const setupAudio: (audioUrl: string) => { startAudio: () => void } = (audioUrl: string) => {

    const audio: HTMLAudioElement = new Audio(audioUrl);

    const startAudio: () => void = () => {
        audio.play();
    };

    audio.addEventListener(
        'ended',
        function():void {
            this.currentTime = 0;
            this.play();
        },
        false
    );

    return {
        startAudio
    };
};
