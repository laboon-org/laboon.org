import "./App.css";
import "./Home.css";
import "./css/responsive/reponsiveDisplayBig.css";
import "./css/responsive/responsiveprocrew.css";
import Home from "./page/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./page/Products/Product";
import Crew from "./page/Crew/Crew";
import Blog from "./page/Blog/Blog";
import constant from "./constant";
import { useEffect, useState } from "react";
import axios from "axios";
//test
const endpoint = constant.API.url;
const MyQuery  = `
{
  people {
    first_name
    last_name
    short_desc
    position {
      group_position
      position_name
      position_priority
    }
    socialLinks {
      social_name
      link
      icon {
        url
      }
    }
    photo {
      url
    }
  }
}
`;

const FILMS_QUERY_PRODUCTS = `
{
  products {
    title  
    content {
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
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query:  MyQuery,
      },
    })
      .then((response) => {
        // console.log('TEST:', response)
        setUser(response.data.data.people)
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query: FILMS_QUERY_PRODUCTS,
      },
    })
      .then((response) => setProducts(response.data.data.products))
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
          <Route path="/crew">
            <Crew user={user}></Crew>
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
