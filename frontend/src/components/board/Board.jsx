import React, { useEffect, useState } from "react";
import "./Board.css";
import MyDeck from "./userDeck/UserDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";
import shuffleArray from "../../utils/shuffleArray";

const Board = () => {
  const [playedCards, setPlayedCards] = useState([]);
  const [deck, setDeck] = useState(shuffleArray(cards()));

  useEffect(() => {}, []);

  return (
    <div className="container board__container">
      <Played playedCards={playedCards} />
      <MyDeck
        boardDeck={deck}
        setDeck={setDeck}
        playedCards={playedCards}
        setPlayedCards={setPlayedCards}
      />
    </div>
  );
};

export default Board;
