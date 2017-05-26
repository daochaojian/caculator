import { AsyncStorage } from 'react-native';
import { useStrict } from 'mobx';
import { create } from 'mobx-persist';
import { enableLogging } from 'mobx-logger';

useStrict(true);

enableLogging({
  predicate: () => __DEV__ && Boolean(global.navigator.userAgent),
  action: true,
  reaction: false,
  transaction: false,
  compute: false,
});

// const hydrate = create({ storage: AsyncStorage });
