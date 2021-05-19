import logo from './logo.svg';
import { Route, Switch} from 'react-router-dom'
import Home from './component/home'
import BayangQiblat from './component/bayangQIblat'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bayangqiblat" component={BayangQiblat} /> 
      </Switch>     
    </div>
  );
}

export default App;
