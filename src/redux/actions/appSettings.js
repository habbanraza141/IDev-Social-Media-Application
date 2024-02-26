import strings from '../../constants/lang';
import { storeData } from '../../utils/helperFunctions';
import {changeTheme, changeLang} from '../reducers/appSettings';
import store from '../store';
const { dispatch } = store;


export const changeLanguage = (data) => {
  strings.setLanguage(data)
  storeData('language', data).then((res)=>{
    dispatch(changeLang(data));
  }).catch((error)=>{
    console.log("error")
  })
  dispatch(changeLang(data));

}


export const changeAppTheme = (data) =>{
  storeData('theme', data).then((res)=>{
    dispatch(changeTheme(data));
  }).catch((error)=>{
    console.log("error")
  })
}