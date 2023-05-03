import {useEffect, useState} from "react";

const useCardsFetcher: (url: string) => { data: boolean; cardsN: any[] } = (url:string) => {
    const [cardsN, setCards] = useState([]);
    const [data, setData] = useState(false);

    try {
        useEffect(() => {
            fetch(url)
                .then((res: Response) => res.json())
                .then((data: any) => {
                    setCards(data);
                    setData(true);
                });
        }, [url]);

        return { cardsN, data };
    } catch (error) {
        throw new Error('Failed to fetch card data for - ' + url)
    }
};

export default useCardsFetcher as (url:string) => { cardsN: any[], data: boolean };
