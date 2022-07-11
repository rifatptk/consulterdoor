import { Amplify } from 'aws-amplify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import config from './env.json';
import { Router } from './router';
import { persistor, store } from './store/';
Amplify.configure(config.awsConfig);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
