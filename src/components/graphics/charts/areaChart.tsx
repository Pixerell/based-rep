import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PixIcon from '@mui/icons-material/Pix';
import {Button, Icon} from "@mui/material";
import {format, parseISO, subDays} from 'date-fns'
import React, {useState} from "react";
import {
    Area,
    AreaChart, CartesianGrid, Tooltip, XAxis, YAxis,
} from "recharts";
import "./areaChart.scss";
import useChartDimensions from "./useChartDimsLogic";


function generateDataArray(): any[] {
    const data: any[] = [];
    for (let num: number = 30; num >= 0; num--) {
        const randomValue: number = 1 + Math.random() * 99 * (Math.random() < 0.025 ? Math.pow(10, Math.floor(Math.random() * 4) + 1) : 1);
        const randomValue2: number = 1 + Math.random() * 99 * (Math.random() < 0.025 ? Math.pow(10, Math.floor(Math.random() * 4) + 1) : 1);
        data.push({
            date: subDays(new Date(), num).toISOString().substring(0, 10),
            value: randomValue,
            value2: randomValue2 / 2,
        });
    }
    return data;
}


let data: any[] = generateDataArray();

function AreaCoinChart(): JSX.Element {


    const { chartHeight }: { chartHeight: number} = useChartDimensions();
    const { chartWidth }: { chartWidth: number} = useChartDimensions();

    const [initialPriceUsd, setInitialPriceUsd] = useState<number | null>(null);
    const [initialPriceRub, setInitialPriceRub] = useState<number | null>(null);
    const [ticker, setTicker] = useState('');


    React.useEffect(() => {
        if (data.length > 0) {
            const initialUsd: number = data[0].value;
            const initialRub: number = data[0].value2;
            setInitialPriceUsd(initialUsd);
            setInitialPriceRub(initialRub);
        }
    }, [data]);

    function generateTickerString(): string {
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length: number = Math.floor(Math.random() * 3) + 3; // Random length between 3 and 5
        let tickerString: string = '';

        for (let i:number = 0; i < length; i++) {
            const randomIndex: number = Math.floor(Math.random() * characters.length);
            tickerString += characters[randomIndex];
        }
        console.log(tickerString)
        setTicker(tickerString);
        return tickerString.toUpperCase();
    }

    const handleClick: () => void = () => {
        data = generateDataArray();
        setTicker(generateTickerString());
    };


    return (
            <div className="chart-container">
                    <AreaChart width={chartWidth} height={chartHeight}  data={data}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" stopColor="#e880ff" stopOpacity={0.4}/>
                                <stop offset="0" stopColor="#e880ff" stopOpacity={0.05}/>
                            </linearGradient>
                        </defs>
                        <Area dataKey="value" stroke='#e880ff' fill="url(#color)"/>
                        <Area dataKey="value2" stroke='#e820ff' fill="url(#color)"/>
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={(str: string) => {
                            const date: Date = parseISO(str);
                            if (date.getDate() % 7 === 0 ) {
                                return format(date, "MMM, d");
                            }
                            return ""}}/>
                        <YAxis dataKey="value" axisLine={false} tickLine={false} tickCount={6} tickFormatter={(number: number) => `$${number.toFixed(2)}`}/>
                        <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} initialPriceUsd={initialPriceUsd} initialPriceRub={initialPriceRub}/>}/>
                        <CartesianGrid opacity={0.1} vertical={false}/>
                    </AreaChart>
                <div className="bottomArea">
                    <span className="shitcoinWrap">
                        <Icon className="shitcoin">
                            <PixIcon />
                        </Icon>
                        <p className="shitcoinLabel">{ticker ? ticker : generateTickerString()}</p>
                    </span>
                    <div className="priceIndicators">
                        <span className="priceSection">
                            <h2 className={`priceText ${data[data.length - 1].value >= data[0].value ? 'green' : 'red'}`}>
                              $ {`${data[data.length - 1].value - data[0].value >= 0 ? '+' : ''}${(data[data.length - 1].value - data[0].value).toFixed(2)}`}
                            </h2>
                            {data[data.length - 1].value >= data[0].value ? (
                                <Icon className="priceIcon green">
                                    <ArrowDropUpIcon />
                                </Icon>
                            ) : (
                                <Icon className="priceIcon red">
                                    <ArrowDropDownIcon />
                                </Icon>
                            )}
                        </span>
                        <span className="priceSection">
                            <h2 className={`priceText ${data[data.length - 1].value2 >= data[0].value2 ? 'green' : 'red'}`}>
                              ₽ {`${data[data.length - 1].value2 - data[0].value2 >= 0 ? '+' : ''}${(data[data.length - 1].value2 - data[0].value2).toFixed(2)}`}
                            </h2>
                            {data[data.length - 1].value2 >= data[0].value2 ? (
                                <Icon className="priceIcon green">
                                    <ArrowDropUpIcon />
                                </Icon>
                            ) : (
                                <Icon className="priceIcon red">
                                    <ArrowDropDownIcon />
                                </Icon>
                            )}
                        </span>
                    </div>
                    <div className="buttonWrapper">
                        <Button variant="outlined" className="generateButton"   onClick={handleClick}>ГЕНЕРИРОВАТЬ</Button>
                    </div>
                </div>
            </div>
        )

}
// tslint:disable-next-line:typedef
function CustomTooltip({ active, payload, label, initialPriceUsd, initialPriceRub }: any): JSX.Element | null {
    const [priceChangeUsd, setPriceChangeUsd] = React.useState<number | null>(null);
    const [priceChangeRub, setPriceChangeRub] = React.useState<number | null>(null);

    React.useEffect(() => {
        if (payload && payload.length > 0) {
            const currentValueUsd: number = payload[0].value;
            const currentValueRub: number = payload[1].value;

            if (initialPriceUsd !== null) {
                const priceChangeUsd: number = ((currentValueUsd - initialPriceUsd) / initialPriceUsd) * 100;
                setPriceChangeUsd(priceChangeUsd);
            }

            if (initialPriceRub !== null) {
                const priceChangeRub: number = ((currentValueRub - initialPriceRub) / initialPriceRub) * 100;
                setPriceChangeRub(priceChangeRub);
            }
        }
    }, [payload, initialPriceUsd, initialPriceRub]);

    if (active) {
        return (
            <div className="tooltip">
                <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
                <span className="tooltipValSection">
                    <p>${payload[0].value.toFixed(2)} USD </p>
                    {priceChangeUsd !== null && (
                        <p style={{ color: priceChangeUsd >= 0 ? "#45f1d4" : "#f35d9b", marginLeft: "10px", fontWeight: 700 }}>
                            {priceChangeUsd > 0 && "+"}
                            {priceChangeUsd.toFixed(2)}%
                        </p>
                    )}
                </span>
                <span className="tooltipValSection">
                    <p>₽{payload[1].value.toFixed(2)} RUB</p>
                    {priceChangeRub !== null && (
                        <p style={{ color: priceChangeRub >= 0 ? "#45f1d4" : "#f35d9b", marginLeft: "10px", fontWeight: 700 }}>
                            {priceChangeRub > 0 && "+"}
                            {priceChangeRub.toFixed(2)}%
                        </p>
                    )}
                </span>
            </div>

        );
    }

    return null;
}


export default AreaCoinChart;
