import React, {useLayoutEffect, useState} from "react";
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

const specialMarkingColor: string = '#e880ff';

const specialYears: { year: number, value: string, dy: number, dx : number }[] = [
    { year: 1991, value: "Выпуск Loveless", dy: 140, dx : 125 },
    { year: 1998, value: "Запрет на клонирование людей", dy: 240, dx: 115 },
    { year: 2002, value: "Рождение AlexBeats", dy: 130, dx : 0 },
];


const data: { listeners: number; year: number; id: number; releases: number }[] = ShoegazerData.map((item: { listeners: number; year: number; id: number; releases: number }) => ({
    ...item,
    listeners: item.listeners / 1000, // convert listeners to thousands
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

// tslint:disable-next-line:typedef
const getSpecialYearLabelProps = (year: number) => {
    // tslint:disable-next-line:typedef
    const specialYear = specialYears.find((item: { year: number; value: string; dy: number; dx: number }) => item.year === year);

    if (specialYear) {
        return { value: specialYear.value, dy: specialYear.dy, dx: specialYear.dx };
    }

    return {};
};

export default function DualAxisLineChart() : JSX.Element {

    const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.88);
    //const [chartHeight, setChartHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        function updateSize(): void {
            setChartWidth(window.innerWidth * 0.88);
      //      setChartHeight(window.innerHeight);
        }

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);


    return (
        <div>
            <LineChart width={chartWidth} height={500} className="lineChart" data={data}>
                <CartesianGrid strokeDasharray="3 20" stroke="magenta" />
                <XAxis dataKey="year" tick={<XAxisTick />} />
                <YAxis yAxisId="left" label={{ value: "Listeners (thousands)", angle: -90, position: "insideLeft" }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: "Releases", angle: 90, position: "insideRight" }} />
                <Tooltip  labelFormatter={(tooltipValue: any) => `Год - ${tooltipValue}`}
                          contentStyle={{ backgroundColor: "#080613", borderRadius: "4px", width: "320px", color: 'white'}}/>
                <Legend className="legendStyle" />
                <Line name="Слушают шугейз (тыс)" type="monotone" dataKey="listeners" yAxisId="left" stroke="white" strokeWidth={4} />
                <Line name="Альбомы" type="monotone" dataKey="releases" yAxisId="right" stroke="cyan" strokeWidth={2}  />
                {specialYears.map((item: { year: number; value: string; dy: number; dx: number }) => (
                    <ReferenceLine
                        key={item.year}
                        x={item.year}
                        yAxisId="left"
                        stroke={specialMarkingColor}
                        strokeDasharray="3 3"
                    >
                        <Label className="specialYearLabel"
                            {...getSpecialYearLabelProps(item.year)}
                            position="insideTopRight"
                            offset={5}
                            fill={specialMarkingColor}
                        >
                            {item.value}
                        </Label>
                    </ReferenceLine>
                ))}

            </LineChart>
        </div>
    );
};
