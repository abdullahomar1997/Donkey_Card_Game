import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./UserDeck.css";

let updatedDeck;

const UserDeck = ({ boardDeck, setDeck, playedCards, setPlayedCards }) => {
  const OnCardPlayedHandler = (card) => {
    console.log(playedCards);
    console.log(card);
    if (playedCards.length < 2) {
      setPlayedCards([...playedCards, card]);
    } else if (playedCards[playedCards.length - 1].cardSign === card.cardSign) {
      setPlayedCards([]);
    } else {
      setPlayedCards([...playedCards, card]);
    }
    setDeck(boardDeck.filter((c) => c.id !== card.id));
  };

  const cpuPlayAutomatically = () => {
    // let card = deck[0];
    // return card;
  };

  return (
    <div className="your__cards">
      {boardDeck.map((card) => (
        <div className="card leftlap" onClick={() => OnCardPlayedHandler(card)}>
          <img src={require(`../../../assets/deck/pass.png`)} alt="me" />
        </div>
      ))}
    </div>
  );
};

export default UserDeck;
