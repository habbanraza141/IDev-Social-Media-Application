import {changeTheme, changeLang} from '../reducers/appSettings';
import store from '../store';
const { dispatch } = store;


export const changeLanguage = (data) => {
  dispatch(changeLang(data)); 
};


export const changeTheme = (data) =>{
  dispatch(changeTheme(data));
}