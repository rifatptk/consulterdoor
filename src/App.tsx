import { Provider } from 'react-redux';
import { store, persistor } from './store/';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './router';

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
