
import './App.css';
import Home from './page/Home/Home';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Product from './page/Products/Product';
import Team from './page/Team/Team';
import Blog from './page/Blog/Blog';
import { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = "https://directus.laboon.org/graphql";
const FILMS_QUERY = `
  {
    employ(limit: 22, offset: 0){
        last_name
        first_name
        short_desc
        position{ 
            position_name
            group_position{ 
                position_group_name
            }
        }
        group_resource_id{ 
            sources{ 
                directus_files_id{ 
                    filename_disk
                }
            }
        }
    }
  }
`;

const FILMS_QUERY_PRODuCTS = `
  {
    projects {
      title
      content
      image{
        filename_disk
      }
      product_category{
        category_name
      }
      refs{
        ref_link_id{
          image{
            filename_disk
          }
        }
      }
    }
  }
`;

function App() {
  const [user, setUser] = useState([]);
  const [products, setPorducts] = useState([]);
  useEffect(() => {
    axios({
        url: endpoint,
        method: 'POST',
        data: {
            query: FILMS_QUERY,
        }
    })
    .then(response => setUser(response.data.data.employ))
    .catch(err => console.error(err))
},[])

useEffect(() => {

  axios({
    url: endpoint,
    method: 'POST',
    data: {
        query: FILMS_QUERY_PRODuCTS,
    }
})
.then(response => setPorducts(response.data.data.projects))
.catch(err => console.error(err))


},[])

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/product">
          <Product products={products}></Product>
        </Route>
        <Route path="/team">
          <Team user={user}></Team>
        </Route>
        {/* <Route path="/blog">
          <Blog></Blog>
        </Route> */}
      </Switch>
      </div>
    </Router>

  );
}

export default App;
