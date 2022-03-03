import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Character } from '../../utils/interfaces/Api'
import { Wrapper } from './Card.styled';

interface Props {
  character: Character
}

export const Card = (props: Props) => {
  const { character } = props;
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/details/${character.char_id}`);
  };

  return (
    <Wrapper>
      <div className='card' onClick={navigateToDetail}>
        <img src={character.img} className='img'/>
      </div>
      <div>{character.name}</div>
      <div>{character.nickname}</div>
    </Wrapper>
  )
}
