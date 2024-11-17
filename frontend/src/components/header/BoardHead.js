import React from 'react';
import {IoMdArrowRoundBack} from "react-icons/io";
import {RiSettings3Fill} from "react-icons/ri";
import styled from "styled-components";
import tinycolor from 'tinycolor2';
import {BoardBackground, colorsList} from '../../constants/colors';
const originalColor = tinycolor(BoardBackground);

// Lighten the color by 20% (adjust the percentage as needed)
const lighterColor = originalColor.lighten(10).toString();
const darkerColor = originalColor.darken(5).toString();

const BoardHeader = () => {

    return (
        <MenuContainer>
            <BackIcon as={IoMdArrowRoundBack} size={28} />
            <GameMessage>
                <Message>
                    Your Turn
                </Message>
            </GameMessage>
            <Settings >
                <SettingsIcon as={RiSettings3Fill} size={23} />
            </Settings>
        </MenuContainer>
    )
}

export default BoardHeader;

const MenuContainer = styled.div`
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: ${colorsList[6]};
  background-color: ${colorsList[7]};
  background-color: ${colorsList[9]};
  background-color: ${colorsList[10]};
  background-color: #0c2e49;
  background-color: #1d4f82;
  background-color: #102e48;
  background-color: #294e1a;
  background-color: ${lighterColor};
  /* position: absolute; */
  overflow: hidden;
  z-index: 1;

`
const Number = styled.h1`
  right: 130px;
  position: absolute;
  font-size: 1.5rem;
  font-family: text4;
`;

const Icon = styled.div`
  position: absolute;
  color: white;
  cursor: pointer;
`;

const BackIcon = styled(Icon)`
  left: 20px;
`;

const SettingsIcon = styled(Icon)`
  right: 25px;
`;
const AchievementsIcon = styled(Icon)`
  right: 80px;
`;

const Settings = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const GameMessage = styled.div`
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${darkerColor};
  /* background-color: black; */
`;

const Message = styled.p`
  /* position: absolute; */
  font-weight:bold;
  font-size: 0.9rem;
`;

