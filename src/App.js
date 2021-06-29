import './App.css';
import { InitNotification } from './services/firebaseService';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <button onClick={InitNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
