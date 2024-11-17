import React, {useEffect, useState} from "react";
import styled from "styled-components";
import cards from "../../constants/cards";
import shuffleArray from "../../utils/shuffleArray";
import "./Board.css";
import Played from "./played/Played";
import MyDeck from "./userDeck/UserDeck";

const Board = () => {
  const [playedCards, setPlayedCards] = useState([]);
  const [deck, setDeck] = useState(shuffleArray(cards()));

  useEffect(() => {}, []);

  return (
    <PlayerContainer>
      {/* <Played playedCards={playedCards} /> */}
      <MyDeck
        boardDeck={deck}
        setDeck={setDeck}
        playedCards={playedCards}
        setPlayedCards={setPlayedCards}
      />
    </PlayerContainer>
  );
};

export default Board;

const PlayerContainer = styled.div`

  &.player1 {
    grid-area: player1;
    justify-self: center;
    align-items: end;
    /* background-color: blue; */
  }

  &.player2 {
    grid-area: player2;
    /* background-color: green; */
    /* justify-self: center; */
    width: 100%;
    padding-right: 30px;
    /* margin-bottom: 100px;
    padding-bottom: 100px; */
  }

  &.player3 {
    /* grid-area: player3;  
    display: flex;
    align-items: center;
    padding-bottom: 5vh; */

    /* grid-area: player3;
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    padding-bottom: 5vh; */
    /* background-color: purple; */
    /* grid-area: player3;
    display: flex;
    align-items: center;
    padding-bottom: 5vh;
    background-color: pink; */
    grid-area: player3;
    /* align-self: center; */
    /* justify-self: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5vh;
    /* background-color: red; */

  }

  &.player4 {
    grid-area: player4;
    /* align-self: center; */
    /* justify-self: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5vh;
    /* background-color: red; */
  }

  &.played {
    grid-area: played;
    align-self: center;
    justify-self: center;

    @media screen and (max-device-width: 480px) and (orientation: portrait) {
      /* background-color: red; */
    }
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {

    &.player1 {
      /* background-color: green; */
      width: 100%;
      height: 100%;
    }

    &.player2 {
      overflow: hidden;
      transform: scaleY(-1);
    }

    &.player3 {
      /* height: 100%; */
      /* overflow: hidden; */
    }

    &.player4 {
      width: 100%;
      height: 100%;
      /* background-color: red; */
      /* overflow: hidden; */
    }
  }
`;