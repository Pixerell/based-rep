import React from "react";
import Footer from "../footer-component/Footer";
import {AudioPlayer, setupAudio} from "../helpers/audioPlayer";
import ButtonBack from "../helpers/button-component/buttonBack";
import './About.scss';

export default function About(): JSX.Element {
    
    const {startAudio }: AudioPlayer = setupAudio("/EYDIAB.mp3");

    return (
        <div className={"Bod"}>
            <ButtonBack urlNav="/"/>
            <div className={"Wrapper"}>
                <div className={"Heading"}>
                <img className={"Background"} src={"bg.jpg"} onLoad={startAudio} alt="background chillwave about image"/>
                <img className={"Foreground"} src={"fgf.png"} alt="foreground clouds about image"/>
                <h1 className={"Title"}>RASSLABUXA</h1>
                </div>
                <section>Jax في Evasion ، وهو موقف دفاعي ، لمدة ثانيتين ، مما يتسبب في تفادي جميع الهجمات الأساسية غير البرجية ضده طوال المدة

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet varius sapien. Pellentesque tincidunt eget neque sed dapibus. Fusce tincidunt aliquet pretium. Vivamus venenatis est in consectetur convallis. Aliquam dapibus efficitur varius. Nullam quis augue non nibh vulputate accumsan vel a felis. Donec at dictum nunc, in accumsan dolor.

                    Aenean interdum nunc lectus, pellentesque lobortis nunc tincidunt ut. Sed hendrerit blandit ex in bibendum. Proin egestas sed dui at mattis. Morbi in venenatis augue. In ac tempus dui. Pellentesque orci quam, imperdiet vel est vel, semper pharetra neque. Vivamus tempus sem posuere faucibus aliquam. Quisque lacinia aliquam mi, nec rutrum sapien luctus sed. Pellentesque a erat sit amet eros lacinia feugiat quis et eros. Integer sodales vitae velit quis facilisis. In pellentesque eleifend enim, eget commodo enim bibendum eget.

                    Fusce dolor erat, faucibus a rutrum at, scelerisque ut odio. Mauris vulputate orci a faucibus pretium. Integer auctor non justo in lacinia. Curabitur lacinia metus eu consectetur consectetur. Ut mattis commodo consectetur. Fusce id congue neque. Curabitur lacinia ac nulla ac egestas. Vivamus nec rutrum augue. Curabitur tortor leo, fringilla sed nunc sit amet, dictum egestas enim. Morbi in diam eu justo mollis cursus. Praesent quis tortor eu sem aliquam imperdiet at sit amet urna. Nunc sodales felis vitae commodo dictum.

                    Suspendisse efficitur risus purus, ac tincidunt velit pulvinar rutrum. Fusce tempor pulvinar ante. Vivamus pellentesque aliquet mi a accumsan. In leo lacus, gravida at enim vitae, euismod cursus nunc. Ut nec magna ac risus tincidunt auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis ante, porttitor sit amet porta et, hendrerit in velit.

                    Curabitur pharetra dictum ullamcorper. Cras nibh ligula, vehicula vel bibendum et, vulputate tincidunt erat.
                    Etiam nunc augue, ultrices iaculis eros vitae, auctor interdum turpis. Maecenas convallis auctor est in varius.
                    Duis vestibulum auctor faucibus.</section>

                <Footer/>
            </div>
        </div>
    )
}
