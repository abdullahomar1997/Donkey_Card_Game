import React from "react";
import styled from "styled-components";
import {card_width_l, card_width_s} from "../../../constants/sizes";


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
    <Container>
      <PlayerContainer>
      {boardDeck.map((card) => (
        <UserCard onClick={() => OnCardPlayedHandler(card)}>
          <UserCardImage src={require(`../../../assets/deck/pass1.jpg`)} alt="me" />
        </UserCard>
      ))}
      </PlayerContainer>
    </Container>
  );
};

export default UserDeck;

const Container = styled.div`
    // height: 80vh;
    // height: 100%;
    display: flex;
    background-color: #0c2e49;
`

export const PlayerContainer = styled.div`

  align-items: center;  
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column-reverse;
    grid-gap: 0.2rem;
    justify-content: center;
    @media screen and (max-device-width: 480px) and (orientation: portrait) {
      display: flex;
      grid-gap: 0.1rem;
      }
  
`;

export const PlayerContainer2 = styled.div`

  align-items: center;  
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 0.2rem;
    justify-content: center;
    // background-color: #0c2e68;
    @media screen and (max-device-width: 480px) and (orientation: portrait) {
      display: flex;
      grid-gap: 0.1rem;
      }
`;

export const UserCard = styled.div`
  // transform: ${(props) => (props.ismoving === 'true' && `translate(${props.newposition.left}px, ${props.newposition.top}px)`)};
  // transition: transform 1s ease;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;
export const UserCard1 = styled.div`
  cursor: pointer;
  margin-right: -35px

  &:hover {
    cursor: pointer;
  }
`;

export const UserCardImage = styled.img`

--card-width: ${card_width_l};
--card-width: ${card_width_l};

  width: var(--card-width);
  height: calc(var(--card-width) * 1.5);
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  visibility: ${({ visibility }) => visibility};
  opacity: 1;

  ${(props) => props.isplayable !== 'true' && `
    pointer-events: none;
    // opacity: 0.6;
    cursor: not-allowed;
  `};
  
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    --card-width:${card_width_s};
  }


`;