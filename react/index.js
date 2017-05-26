import 'moment/locale/zh-cn';
import React from 'react';
import { Navigator } from 'react-native';
import { Provider } from 'mobx-react/native';
import * as store from './stores';
import Container from './containers';

const App = () => (
  <Provider {...store}>
    <Navigator
      initialRoute={{ Component: Container }}
      renderScene={({ Component }, navigator) => <Component navigator={navigator} />}
    />
  </Provider>
);

export default App;
