import axios from 'axios';
import { store } from '../store';
import { setIsFetching } from '../store/reducers/global';


const customAxios = axios.create({});
customAxios.interceptors.request.use(
  (response) => {
    store.dispatch(setIsFetching(true));
    return response;
  },
  () => {
    store.dispatch(setIsFetching(false));
  }
);
customAxios.interceptors.response.use(
  (response) => {
    store.dispatch(setIsFetching(false));
    return response;
  },
  () => {
    store.dispatch(setIsFetching(false));
  }
);
export default customAxios;