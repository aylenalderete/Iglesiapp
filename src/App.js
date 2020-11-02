import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Route to='/login' component={Login} /> */}
    </div>
  );
}

export default App;
