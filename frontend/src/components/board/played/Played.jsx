import React from "react";
import {PlayerContainer2, UserCard1, UserCardImage} from "../userDeck/UserDeck";
import "./Played.css";

const Played = ({ playedCards }) => {
  return (
    <PlayerContainer2>
      {playedCards.map((card) => (
        <UserCard1>
          <UserCardImage
            src={require(`../../../assets/deck/${card.cardName}`)}
            alt="me"
          />
        </UserCard1>
      ))}
    </PlayerContainer2>
  );
};

export default Played;