import React from "react";
import "./Played.css";
import cards from "../../../constants/cards";

const Played = ({ playedCards }) => {
  return (
    <div className="your__cards">
      {playedCards.map((card) => (
        <div className="card leftlap">
          <img
            src={require(`../../../assets/deck/${card.cardName}`)}
            alt="me"
          />
        </div>
      ))}
    </div>
  );
};

export default Played;
