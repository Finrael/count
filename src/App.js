import { Provider } from 'react-redux';
import store from './redux/store';
import MainComp from './components/mainComp';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MainComp/>
    </div>
    </Provider>
  );
}

export default App;
