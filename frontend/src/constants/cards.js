import getCardNumber from "../utils/getCardNumber";

const cards = () => {

    const cardValues = [
        "ace",
        "king",
        "queen",
        "jack",
        "10",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
    ];

    const cardSigns = ["spades", "clubs", "diamonds", "hearts"];

    const cards = [];

    let index = 0;

    for (let i = 0; i < cardValues.length; ++i) {

        for (let j = 0; j < cardSigns.length; ++j) {

            const card = {
                id: index,
                cardName: cardValues[i] + "_of_" + cardSigns[j] + ".png",
                cardNumber: getCardNumber(cardValues[i]),
                cardSign: cardSigns[j],
                cardVisibility: "none",
                isPlayable: false,
                player: "",
                upperCardId: (index) - 4,
                lowerCardId: (index) + 4,
                isMoving: false,
                isMoving2: "1",

            }

            if (card.cardNumber === 7) {
                card.isPlayable = true;
            }

            cards.push(card)
            index += 1;
        }
    }



    return cards;

}

export default cards;