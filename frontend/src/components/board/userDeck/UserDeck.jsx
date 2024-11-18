import React from "react";
import styled from "styled-components";
import {card_width_l, card_width_s} from "../../../constants/sizes";


let updatedDeck;

const UserDeck = ({ boardDeck, setDeck, playedCards, setPlayedCards, player1cards, setPlayer1cards,visibility }) => {

  const OnCardPlayedHandler = (card) => {
    console.log(playedCards);
    if (playedCards.length < 2) {
      setPlayedCards([...playedCards, card]);
    } else if (playedCards[playedCards.length - 1].cardSign === card.cardSign) {
      setPlayer1cards([...player1cards, ...playedCards, card]);
      setPlayedCards([]);
    } else {
      setPlayedCards([...playedCards, card]);
    }
    setDeck(boardDeck.filter((c) => c.id !== card.id));

  //   setTimeout(() => {
  //      let cpuCard = cpuPlayAutomatically();

  //   if (playedCards.length < 2) {
  //     setPlayedCards([...playedCards, cpuCard]);
  //   } else if (playedCards[playedCards.length - 1].cardSign === cpuCard.cardSign) {
  //     setPlayedCards([]);
  //   } else {
  //     setPlayedCards([...playedCards, cpuCard]);
  //   }
  //   setDeck(boardDeck.filter((c) => c.id !== cpuCard.id));
  // }, 2000); 
    
  };


  const cpuPlayAutomatically = () => {
    let card = boardDeck[0];
    return card;
  };
  
  return (
    <Container>
      <PlayerContainer>
        {(boardDeck.length > 0 ? boardDeck : player1cards).map((card) => (
          <UserCard onClick={() => OnCardPlayedHandler(card)} key={card.id}>
            <UserCardImage 
              src={require(`../../../assets/deck/${visibility === "visible" ? card.cardName : 'pass1.jpg'}`)} 
              alt="card" 
            />
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
  cursor: pointer;
  transition: transform 0.2s ease-in-out;  // Smooth transition for transform

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




// const OnCardPlayedHandler = (card) => {
//   // Handle the player's card play
//   const updatePlayedCards = (newCard) => {
//     if (playedCards.length < 2) {
//       return [...playedCards, newCard];
//     } else if (playedCards[playedCards.length - 1].cardSign === newCard.cardSign) {
//       return []; // Reset if the last two cards have the same cardSign
//     } else {
//       return [...playedCards, newCard];
//     }
//   };

//   setPlayedCards(updatePlayedCards(card));
  
//   // setTimeout(() => {
//     // let cpuCard = cpuPlayAutomatically();

//     // setPlayedCards(updatePlayedCards(cpuCard));

//     // setDeck(boardDeck.filter((c) => c.id !== cpuCard.id));
//   // }, 2000); //
// };
