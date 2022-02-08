import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Quiz from './routes/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
