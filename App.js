//import liraries
import React, { useEffect } from 'react';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { changeLang } from './src/redux/reducers/appSettings';
import strings from './src/constants/lang';
import { changeAppTheme, changeLanguage } from './src/redux/actions/appSettings';
import { getData } from './src/utils/helperFunctions';
import FlashMessage from "react-native-flash-message";
const { dispatch } = store;

const App = () => {

  useEffect(() => {

    (async () => {
      try {
        let myTheme = await getData('theme')
        let myLang = await getData('language')
        console.log(" theme res++++", myTheme)
        console.log(" language res++++", myLang)
        if (!!myTheme) {
          changeAppTheme(myTheme)
        }
        if (!!myLang) {
          changeLanguage(myLang)
        }
      } catch (error) {
        console.log('no data found')
      }
    }
    )();
  }, [])

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
