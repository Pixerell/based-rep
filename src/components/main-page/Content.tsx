import {Box, Grid} from "@mui/material";
import React from 'react';
import {PROJECT_CARDS_URL} from "../../apiUrls";
import imageOfMe from "../../workingImages/me.png"
import Preloader from "../helpers/preloader-component/Preloader";
import useCardsFetcher from "../helpers/useCardsFetcher";
import './Content.scss';
import ProjectCard from "./projectCard/ProjectCard";


function MainContent(): JSX.Element {

	const {cardsN, data} = useCardsFetcher(PROJECT_CARDS_URL);


	return (
		<div className={'bg'}>
			{data ? (
				<div>
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
					<div className={"cardWrapper"}>
						<Box className={"boxCards"} padding={2} sx={{marginLeft: '16%', marginRight:'16%',}} >
							<Grid container spacing={16} sx={{marginBottom: 0, width: 'auto', padding: 0}} >
								{/* tslint:disable-next-line:typedef */}
								{cardsN.map(cardN => (
									<Grid sx={{paddingTop: 0}} item key={cardN.id} xs={12} md={6} lg={6}  >
										<ProjectCard card={cardN} />
									</Grid>
								))}
							</Grid>
						</Box>
					</div>
					<div className={'Bottomclass'}>
						<div className={'BottomDescription'}>

							<span className={'Codetextblock1'}>
								<h4 className={'TextParagraph'}>
									<span className={'Tagtext'}>&lt;/projects&gt;</span>
								</h4>
							</span>
								<span className={'Codetextblock'}>
								<h3 className={'TextParagraphBold'}>
									<span className={'Tagtext'}>&lt;/head&gt;</span>
								</h3>
							</span>
						</div>
					</div>
				</div>


				) :
			<Preloader/>
			})
		</div>
)
}

export default MainContent;
