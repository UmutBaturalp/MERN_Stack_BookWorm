/**
 * BookWorm App
 * MERN Stack Mobile Uygulaması
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {RootNavigator} from './src/navigation';
import COLORS from './src/config/colors';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <RootNavigator />
    </Provider>
  );
}

export default App;
