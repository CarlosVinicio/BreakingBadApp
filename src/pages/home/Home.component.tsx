import {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../../api/services/breaking-bad';
import { Card } from '../../components/card/Card.component';
import { setLanguage } from '../../store/reducers/global';
import { Character } from '../../utils/interfaces/Api';
import { reduxState } from '../../utils/interfaces/Redux';
import { WrapperStyled } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { list } = useSelector((state: reduxState) => { 
    return state.global
  })

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [])
  
  return (
    <WrapperStyled>
      <div className='cards-grid'>
        <div>{t("home.edit")}</div>
        {
          list.map((character: Character) => {
            return (
              <Card key={character.char_id} character={character}/>
            )
          })
        }
      </div>
    </WrapperStyled>
  )
}
