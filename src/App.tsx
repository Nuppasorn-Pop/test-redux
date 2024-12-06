import Router from "./routes";
import { Provider } from 'react-redux';
import store from "./store/index"

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
