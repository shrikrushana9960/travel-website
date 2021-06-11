import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services/:movie" component={Services} />
        <Route path="/services" component={Services} exact/>
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
