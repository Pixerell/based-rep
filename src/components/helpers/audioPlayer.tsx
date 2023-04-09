export type AudioPlayer = {
    startAudio: () => void;
};

// tslint:disable-next-line:typedef
export const setupAudio = (audioUrl: string): AudioPlayer => {

    const audio: HTMLAudioElement = new Audio(audioUrl);

    // tslint:disable-next-line:typedef
    const startAudio = ():void => {
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
