import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../../api/services/breaking-bad';
import { reduxState } from '../../utils/interfaces/Redux';

export const Home = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: reduxState) => state.characters)

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [])
  
  return (
    <div>
      {JSON.stringify(list)}
    </div>
  )
}
