//import liraries
import React from 'react';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const { dispatch } = store;

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
};



//make this component available to the app
export default App;
