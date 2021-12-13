import "./App.css";
import "./Home.css";
import "./css/responsive/reponsiveDisplayBig.css";
import "./css/responsive/responsiveprocrew.css";
import Home from "./page/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./page/Products/Product";
import Team from "./page/Team/Team";
import Blog from "./page/Blog/Blog";
import { useEffect, useState } from "react";
import axios from "axios";

const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckx41ssik336s01w89hsk0rf5/master";
const MyQuery  = `
{
  people {
    first_name
    last_name
    short_desc
    position {
      group_position  
      postion_name  
    }
    photo {
      url 
    }
  }
}
`;
 
const FILMS_QUERY_PRODuCTS = `
{
  products{
    title  
    content{
      html  
    }
    cover_image {
      url  
    }
    ref  
    product_category  
    product_refs {
      name  
      link  
      image{ 
        url  
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
      method: "POST",
      data: {
        query:  MyQuery,
      },
    })
      .then((response) => {
        console.log('TEST:',response)
        setUser(response.data.data.people)
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query: FILMS_QUERY_PRODuCTS,
      },
    })
      .then((response) => setPorducts(response.data.data. products))
      .catch((err) => console.error(err));
  }, []);

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
