import React from 'react';
import styled from 'styled-components';

const Score = ({myScore, cpuScore}) => {
    return (
        <Container>
            <ScoreContainer>
                <ScoreBox>
                    <Label>CPU</Label>
                    <ScoreDisplay>{cpuScore}</ScoreDisplay>
                </ScoreBox>
                <ScoreBox>
                    <Label>Me</Label>
                    <ScoreDisplay>{myScore}</ScoreDisplay>
                </ScoreBox>
            </ScoreContainer>
        </Container>
    );
};

export default Score;

// Styled Components

const Container = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
//   background-color: #1d4f82;
  overflow: hidden;
  z-index: 1;
`;

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;  // Distribute the space between left and right sections
  padding: 0 10px;  // Add some padding for better spacing
`;

const ScoreBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
`;

const ScoreDisplay = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);  // Light semi-transparent background for score
//   width: 70px;
  text-align: center;
`;



// const Container = styled.div`
//   height: 40%;
//   display: flex;
//   align-items: center;
//   background-color: ${colorsList[6]};
//   background-color: ${colorsList[7]};
//   background-color: ${colorsList[9]};
//   background-color: ${colorsList[10]};
//   background-color: #0c2e49;
//   background-color: #1d4f82;
//   background-color: #102e48;
//   background-color: #294e1a;
//   background-color: black;
//   overflow: hidden;
//   z-index: 1;
// `

