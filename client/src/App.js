import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing pages
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
