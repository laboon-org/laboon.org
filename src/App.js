
import './App.css';
import Home from './page/Home/Home';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Product from './page/Products/Product';
import Team from './page/Team/Team';
import Blog from './page/Blog/Blog';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        {/* <Route exact path="/product">
          <Product></Product>
        </Route>
        <Route path="/team">
          <Team></Team>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route> */}
      </Switch>
      </div>
    </Router>

  );
}

export default App;
