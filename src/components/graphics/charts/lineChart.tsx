import React, {useEffect, useState} from "react";
import {
    CartesianGrid, Label,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { ShoegazerData } from "../ShoegazerData";
import "./lineChart.scss";
import useChartDimensions from "./useChartDimsLogic";

const specialMarkingColor: string = '#e880ff';

const specialYears: { year: number, value: string, dy: number, dx : number }[] = [
    { year: 1991, value: "Выпуск Loveless", dy: 140, dx : 125 },
    { year: 1998, value: "Запрет на клонирование людей", dy: 240, dx: 115 },
    { year: 2002, value: "Рождение AlexBeats", dy: 130, dx : 0 },
];


const data: { listeners: number; year: number; id: number; releases: number }[] = ShoegazerData.map((item: { listeners: number; year: number; id: number; releases: number }) => ({
    ...item,
    listeners: item.listeners / 1000,
}));

const XAxisTick: (props: any) => JSX.Element = (props: any) => {

    const specialYearsVal: number[] = specialYears.map((item: { year: number; value: string; dy: number }) => item.year);
    const { x, y, payload } = props;
    const isSpecialYear: boolean = specialYearsVal.includes(payload.value);

    const fill: string = isSpecialYear ? specialMarkingColor : "#666";

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill={fill}>
                {payload.value}
            </text>
        </g>
    );
};

const getSpecialYearLabelProps: (year: number) => ({ dx: number; dy: number; value: string }) = (year: number) => {
    const specialYear: { year: number; value: string; dy: number; dx: number } | undefined = specialYears.find((item: { year: number; value: string; dy: number; dx: number }) => item.year === year)!;

    if (specialYear) {
        return { value: specialYear.value, dy: specialYear.dy, dx: specialYear.dx };
    }

    return { dx: 0, dy: 0, value: '' };
};

export default function DualAxisLineChart() : JSX.Element {

    const paragraphs: HTMLElement[] = Array.from(document.querySelectorAll('.fade-inP')) as HTMLElement[];
    const [showDetails, setShowDetails] = useState(false);
    const { chartWidth, handleChartWidthChange }: { chartWidth: number; handleChartWidthChange: () => void } = useChartDimensions();

    useEffect(() => {
        const paragraphs: HTMLElement[] = document.querySelectorAll('.fade-inP') as any as HTMLElement[];

        if (!showDetails) {
            paragraphs.forEach((paragraph: HTMLElement) => {
                paragraph.style.opacity ='0';
            })
        }
        else if (showDetails) {
            let delay: number = 1800;
            paragraphs.forEach((paragraph: HTMLElement) => {
                setTimeout(() => {
                    paragraph.style.opacity = '1';
                }, delay);
                delay += 500;
            });
        }
    }, [showDetails, paragraphs]);

    const handleChartClick: () => void = () => {
        handleChartWidthChange()
        setShowDetails(!showDetails);
    };

    return (
        <div className="lineChartComp">
            <div className="lineChartWrapper" style={{ width: chartWidth }} onClick={handleChartClick} >
                <LineChart width={chartWidth} height={500} className="lineChart" data={data} >
                    <CartesianGrid strokeDasharray="3 20" stroke="magenta" />
                    <XAxis dataKey="year" tick={<XAxisTick />} />
                    <YAxis yAxisId="left" label={{ value: "Listeners (thousands)", angle: -90, position: "insideLeft" }} />
                    <YAxis yAxisId="right" orientation="right" label={{ value: "Releases", angle: 90, position: "insideRight" }} />
                    <Tooltip  labelFormatter={(tooltipValue: any) => `Год - ${tooltipValue}`}
                              contentStyle={{ backgroundColor: "#080613", borderRadius: "4px", width: "320px", color: 'white'}}/>
                    <Legend/>
                    <Line  name="Слушают шугейз (тыс)" type="monotone" dataKey="listeners" yAxisId="left" stroke="white" strokeWidth={4} />
                    <Line name="Альбомы" type="monotone" dataKey="releases" yAxisId="right" stroke="cyan" strokeWidth={2}  />
                    {specialYears.map((item: { year: number; value: string; dy: number; dx: number }) => (
                        <ReferenceLine
                            key={item.year}
                            x={item.year}
                            yAxisId="left"
                            stroke={specialMarkingColor}
                            strokeDasharray="3 3">
                            <Label className="specialYearLabel"
                                   {...getSpecialYearLabelProps(item.year)}
                                   position="insideTopRight"
                                   offset={5}
                                   fill={specialMarkingColor}>
                                {item.value}
                            </Label>
                        </ReferenceLine>
                    ))}
                </LineChart>
            </div>
            <div className={`chartDetails ${showDetails ? 'activeDetails' : ''}`}>
                <div className="detailsHead">
                   Что это значит??
                </div>
                <div className={`detailsDesc chartInfo  ${showDetails ? 'animationP' : ''}`}>
                    <p className="fade-inP" >Шугейз как жанр зародился и получил широкую (2 с половиной человека) известность в
                        поздних 1980-х и начале 1990-х с выпуском альбома My Bloody Valentine - Loveless (смотреть базу).</p>
                    <p className="fade-inP">К сожалению, в это же время начал зарождаться Альтернативный-Рок в стиле Nirvana, который
                        побил шугейз по популярности буквально за 1 год, что и стало причиной крутого падения на графике после 1992</p>
                    <p className="fade-inP">Годами шугейз лежал на дне чартов, но в один день, в один 2002 год, родился AlexBeats.
                    Самый дрейнеровый дрейнер, шуга шуга дедди так сказать. Теперь на его плечах держится вся шугейз сцена, пускай
                    он и не выпустил ни одного шугейз альбома</p>
                    <p className="fade-inP">А ну и в 1998 клонирование запретили ¯\_(ツ)_/¯</p>
                </div>
            </div>
        </div>
    );
};
