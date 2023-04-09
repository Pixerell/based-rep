import React from 'react';
import imageOfMe from "../../workingImages/me.png"
import './Content.scss';


function MainContent(): JSX.Element {
	return (

		<div className={'Base'}>
			<div className={'Headclass'}>
				<h1 className={'HeadTitle'}>Pixerell</h1>
				<span className={'Line'}></span>
				<div className={'HeadDescription'}>
					<span className={'Codetextblock'}>
						<h3 className={'TextParagraphBold'}><span className={'Tagtext'}>&lt;head&gt;</span>
							Алексей Ушаков Юрьевич
						</h3>
					</span>
					<span className={'Codetextblock1'}>
						<p className={'TextParagraph'}>	<span className={'Tagtext'}>&lt;body&gt;</span>Опытный и мотивированный фронт-энд разработчик с практическим опытом работы в
							<span className={'Tagtext1'}>React, JavaScript, HTML</span>и<span className={'Tagtext1'}>CSS.</span>
							Увлечен разработкой интерактивных приложений и созданием бесшовных пользовательских интерфейсов.
						</p>
					</span>
					<span className={'Codetextblock2'}>
						<span className={'TextParagraph'}><span className={'Tagtext'}>&lt;p&gt;</span>Ищу возможность
							<span className={'Tagtext1'}>стажировки.</span>Для дальнейшего повышения навыков и возможности внести вклад в командный проект.<span className={'Tagtext'}>&lt;/p&gt;</span></span>
					</span>
					<span className={'Codetextblock2'}>
						<ul className={'TextParagraph'}>
							<span className={'Tagtext'}>&lt;skills&gt;</span>
							В мои навыки входит:
									<li>Уверенный фронт стек JavaScript, HTML5 и CSS3</li>
								<li>Фреймворк React c использованием библиотек<span className={'Tagtext1'}>Redux, Axios</span>и<span className={'Tagtext1'}>Material-UI</span></li>
								<li>Опыт работы в команде с системами управления версий такими как<span className={'Tagtext1'}>Git</span></li>
								<li>Дополнительное знание языков C#, Python и расширения<span className={'Tagtext1'}>Typescript</span></li>
								<li>Опыт работы с бэк-эндом и его внедрения, включая знание<span className={'Tagtext1'}>SQL и LINQ</span></li>
								<li>Оффициальный<span className={'Tagtext1'}>Дрейнер</span>с уровнем английского<span className={'Tagtext1'}>C1</span></li>
							<span className={'Tagtext'}>&lt;/skills&gt;</span>
						</ul>
					</span>

					<span className={'Codetextblock1'}>
						<p className={'TextParagraph'}>
						<span className={'Tagtext'}>&lt;/body&gt;</span>
						</p>
					</span>

					<span className={'Codetextblock1'}>
						<h4 className={'TextParagraph'}>
						<span className={'Tagtext'}>&lt;projects&gt;</span>
							Список моих проектов:
						</h4>
					</span>


				</div>
			</div>

			<div className={"SideImaging"}>
				<img className={"MyImage"} alt={"Sexiest Human On The Planet"} src={imageOfMe}/>
				<div className={"Circle"}/>
				<div className={"Circle2"}/>
				<div className={"Circle3"}/>
			</div>

		</div>
)
}

export default MainContent;
