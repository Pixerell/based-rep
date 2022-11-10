import React, {useEffect, useState} from "react";


export default function BaseCard(): JSX.Element {
    const [cardsN, setCards] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:8000/musicCards')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
            <div>
                {cardsN.map(cardN => <p key={cardN.id}>{cardN.album}</p>)}
            </div>
    )
}
