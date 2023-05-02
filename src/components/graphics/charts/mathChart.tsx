import {Button, Checkbox, OutlinedInput, styled} from '@mui/material';
import { purple } from '@mui/material/colors';
import html2canvas from "html2canvas";
import { compile as mathCompile } from 'mathjs';
import React, {useEffect, useRef, useState} from 'react';
import {Bar, BarChart, CartesianGrid, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis} from 'recharts';
import "./mathChart.scss";
import useChartDimensions from "./useChartDimsLogic";


// tslint:disable-next-line:typedef
const StyledInput = styled(OutlinedInput)(({ }) => ({
    color: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#c88dff',
        transition: 'border-color 0.2s ease',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff8df0',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff8df0',
    },
}));

function MathChart(): JSX.Element {

    const [expression, setExpression] = useState('(x-3)^2 - 2');
    const [data, setData] = useState<any[]>([]);


    const { chartHeight }: { chartHeight: number} = useChartDimensions();
    const { chartWidth }: { chartWidth: number} = useChartDimensions();

    const evaluateExpression: (expression: string, x: number) => number = (expression: string, x: number): number => {
        try {
            const scope: { x: number } = { x };
            const compiledExpression: math.EvalFunction = mathCompile(expression);
            const result: any = compiledExpression.evaluate(scope);
            return Number(result);
        } catch (error) {
            console.error('Error evaluating expression:', error);
            return NaN;
        }
    };


    useEffect(() => {
        const newData: any[] = [];
        let minY: number = Infinity;
        let maxY: number = -Infinity;

        for (let x:number = -10; x <= 10; x += 0.5) {
            const y:number = evaluateExpression(expression, x);
            newData.push({ x, y });

            if (y < minY) {
                minY = y;
            }
            if (y > maxY) {
                maxY = y;
            }
        }

        setData(newData);

        // Calculate the new minX and maxX based on the newData
        const minX: number = Math.min(...newData.map((point: any) => point.x));
        const maxX: number = Math.max(...newData.map((point: any) => point.x));

        setDomain(minX, maxX, minY, maxY);
    }, [expression]);

    const xTickFormatter: (value: any, index: number) => (any | string) = (value: any, index: number) => {
        if (value === 0 || index % 3 === 0) {
            return value;
        }
        return '';
    };

    const setDomain: (minX: number, maxX: number, minY: number, maxY: number) => void = (minX: number, maxX: number, minY: number, maxY: number) => {
        const xRange: number = maxX - minX;
        const yRange: number = maxY - minY;
        const paddingFactor: number = 0.1; // Adjust the padding factor as needed

        const newMinX: number = minX - xRange * paddingFactor;
        const newMaxX: number = maxX + xRange * paddingFactor;
        const newMinY: number = minY - yRange * paddingFactor;
        const newMaxY: number = maxY + yRange * paddingFactor;

        setXDomain([newMinX, newMaxX]);
        setYDomain([newMinY, newMaxY]);
    };

    const [xDomain, setXDomain] = useState<[number, number]>([-10, 10]);
    const [yDomain, setYDomain] = useState<[number, number]>([-10, 10]);

    const [showReferenceLine, setShowReferenceLine] = useState(false);
    const [showGradient, setShowGradient] = useState(true);
    const [showLineChart, setShowLineChart] = useState(false);


    const handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowReferenceLine(event.target.checked);
    };

    const handleToggleGradient: () => void = () => {
        setShowGradient(!showGradient);
    };

    const handleToggleLineChart: () => void = () => {
        setShowLineChart(!showLineChart);
    };

    const ChartComponent : any = showLineChart ? LineChart : BarChart;


    const chartRef: React.MutableRefObject<null> = useRef(null);

    const [isChartVisible, setIsChartVisible] = useState(false);

    useEffect(() => {
        setIsChartVisible(true);
    }, []);

    const handleSaveChart: () => void = () => {
        if (chartRef.current && isChartVisible) {
            html2canvas(chartRef.current)
                .then((canvas: HTMLCanvasElement): void => {
                    const url: string = canvas.toDataURL('image/png');
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.href = url;
                    link.download = 'yourChart.png';
                    link.click();
                })
                .catch((error: Error): void => {
                    console.error('Error saving chart:', error);
                });
        }
    };

    return (
        <div className="mathChartComp" >
                <div className="lineChartWrapper" ref={chartRef}  style={{ width: chartWidth }} >
                     <ChartComponent onClick={handleSaveChart}  className="mathChart" width={chartWidth} height={chartHeight} data={data}>
                            <defs>
                                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                        <>
                                            <stop offset="20%" stopColor="#8884d8" stopOpacity={0.8} />
                                            {showGradient &&  <stop offset="100%" stopColor="#8884d8" stopOpacity={0.2} />}
                                        </>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="2 2" opacity={0.2} />
                            <XAxis dataKey="x"  tickFormatter={xTickFormatter}
                                   tickLine={false} axisLine={{ stroke: '#c88dff' }} tick={{ fill: '#c88dff', fontWeight : 700 }}/>
                            <YAxis dataKey="y"  tickLine={false} axisLine={{ stroke: '#c88dff' }} tick={{ fill: '#c88dff', fontWeight : 700 }}/>
                            <Tooltip />
                            <Line type="monotone" dataKey="y" stroke="#8884d8" />

                         {showLineChart ? (
                             <Line type="monotone" dataKey="y" stroke="#8884d8" />
                         ) : (
                             <Bar dataKey="y" fill="url(#barGradient)" />
                         )}

                         {showReferenceLine && <ReferenceLine x={0} stroke="#c88dff" strokeOpacity={0.8} strokeWidth={1.5} />}
                         {showReferenceLine && <ReferenceLine y={0} stroke="#c88dff" strokeOpacity={0.8} strokeWidth={1.5} />}
                     </ChartComponent>
                </div>
            <div className="inputWrapper">
                <StyledInput className="inputField"
                             sx={{
                                 '& fieldset': {
                                     borderColor: '#c88dff',
                                 },
                                 '&:hover fieldset': {
                                     borderColor: '#c88dff',
                                 },
                                 '&.Mui-focused fieldset': {
                                     borderColor: '#c88dff',
                                 },
                             }}
                             type="text"
                             value={expression}
                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                 const inputValue: string = e.target.value;
                                 const validatedValue: string = inputValue.replace(/[^xX0-9.^*/+\-() ]/g, "");
                                 setExpression(validatedValue);
                             }}/>
                <div className="buttonsWrap">
                    <span className="butItem">
                        <Checkbox checked={showReferenceLine} onChange={handleCheckboxChange}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 38 },     color: purple[300],
                            '&.Mui-checked': {
                                color: purple[300],
                            }, }}/>
                        <p className="butItemText">Линия отсчёта</p>
                    </span>
                    <span className="butItem">
                        <Checkbox checked={showGradient} onChange={handleToggleGradient}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 38 },     color: purple[300],
                            '&.Mui-checked': {
                                color: purple[300],
                            }, }}/>
                        <p className="butItemText">Градиент</p>
                    </span>
                    <span className="butItem">
                        <Checkbox checked={showLineChart} onChange={handleToggleLineChart}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 38 },     color: purple[300],
                            '&.Mui-checked': {
                                color: purple[300],
                            }, }}/>
                        <p className="butItemText">Линейный тип</p>
                    </span>
                    <div className="buttonWrapper">
                        <Button variant="outlined" className="generateButton imgButton"  onClick={handleSaveChart}>Сохранить Чарт</Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MathChart;
