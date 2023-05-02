import {useLayoutEffect, useState } from "react";

export default function useChartDimensions(): { chartWidth: number; handleChartWidthChange: () => void; chartHeight: number; handleChartHeightChange: () => void } {
    const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.88);
    const [chartHeight] = useState(500);

    useLayoutEffect(() => {
        function updateSize(): void {
            setChartWidth(window.innerWidth * 0.88);
        }
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    
    const handleChartWidthChange: () => void = () => {
        const newChartWidth: number =
            chartWidth === window.innerWidth * 0.88
                ? chartWidth * 0.6
                : window.innerWidth * 0.88;
        setChartWidth(newChartWidth);
    };

    const handleChartHeightChange: () => void = () => {
        const newChartHeight: number =
            chartHeight === 500
                ? 700
                : 500;
        setChartWidth(newChartHeight);
    };

    return { chartWidth, chartHeight, handleChartHeightChange, handleChartWidthChange };
}
