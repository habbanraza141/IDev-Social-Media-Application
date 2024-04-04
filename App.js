//import liraries
import React, { useEffect } from 'react';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { changeAppTheme, changeLanguage } from './src/redux/actions/appSettings';
import { getData } from './src/utils/helperFunctions';
import FlashMessage from "react-native-flash-message";
import { saveUserData } from './src/redux/reducers/auth';
const { dispatch } = store;

const App = () => {

  useEffect(() => {
    initiateLang()
    initiateTheme()
    initUser()
  }, [])

  const initUser = async () => {
    try {
      let data = await getData('userData')
      if (!!data) {
        dispatch(saveUserData(JSON.parse(data)))
      }
    } catch (error) {
      console.log('no data found')
    }
  }

  const initiateTheme = async () => {
    try {
      let myTheme = await getData('theme')

      console.log(" theme res++++", myTheme)

      if (!!myTheme) {
        changeAppTheme(myTheme)
      }
    } catch (error) {
      console.log('no data found')
    }
  }


  const initiateLang = async () => {
    try {
      let myLang = await getData('language')
      console.log(" language res++++", myLang)

      if (!!myLang) {
        changeLanguage(myLang)
      }
    } catch (error) {
      console.log('no data found')
    }
  }


  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage
        position={'top'}
      />
    </Provider>

  );
};



//make this component available to the app
export default App;
