import { useEffect, useState } from 'react';

const useFallbackData: (data: boolean) => boolean = (data: boolean) => {
    const [fallbackData, setFallbackData] = useState(false);

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            if (!data) {
                setFallbackData(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [data]);

    return fallbackData;
};

export default useFallbackData;
