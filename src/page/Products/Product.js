import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Headerlaboon";
import constant from "../../constant";
import "../../grid.css";
import "./product.scss";
import HeaddingSubPage from "../../Components/HeaddingSubPage";
import TitleSubPage from "../../Components/TitleSubPage";
import logo21 from "./imgProduct/logo21.png";
import ProductItems from "./ProductItems";
import axios from "axios";

const Product = ({ products, setPorducts }) => {
  const [currentProduct, setCurrentProduct] = useState(products);
  const [category, setCategory] = useState("All");
  const isFirstRef=React.useRef(true)
  const endpoint = constant.API.url;

  const allProduct = (type) => {
    setCategory(type);
    setCurrentProduct(products);
  };
  const dApps = (type) => {
    let whereQuery = type === "All" ? "" : `( where:{product_category:${type}})`;
    const FILMS_QUERY_dApps = `
    {
      products ${whereQuery} {
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

    setCategory(type);
    //console.log(FILMS_QUERY_dApps);
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query: FILMS_QUERY_dApps,
      },
    })
      .then((response) => setCurrentProduct(response.data.data.products))
      .catch((err) => console.error(err));
  };

  if (isFirstRef.current){
    isFirstRef.current=false;
    dApps('All')
  }

  return (
    <>
      <Header active={"product"} logo={logo21}></Header>
      <HeaddingSubPage
        title={"Products"}
        desp={
          "Make use of these goods to become a citizen of the virtual kingdom."
        }
      ></HeaddingSubPage>
      <div className="grid">
        <div className="products__container">
          {/* <TitleSubPage
            title={"Laboon Products"}
            desp={"Join our digital playground with these products"}
          ></TitleSubPage> */}
          <div className="grid wide">
            <div className="products__content">
              <div className="products__list-title">
                <span
                  className={`${category === "All" && "active"}`}
                  onClick={() => allProduct("All")}
                >
                  All
                </span>
                <span
                  className={`${category === "dApps" && "active"}`}
                  onClick={() => {
                    dApps("dApps");
                  }}
                >
                  dApps
                </span>
                <span
                  className={`${category === "Games" && "active"}`}
                  onClick={() => {
                    dApps("Games");
                  }}
                >
                  Games
                </span>
                <span
                  className={`${category === "Webs" && "active"}`}
                  onClick={() => {
                    dApps("Webs");
                  }}
                >
                  Web
                </span>
              </div>
              <div className="products__list-items row">
                {!!currentProduct &&
                  currentProduct.map((product, index) => (
                    <ProductItems
                      key={index}
                      link={product.ref}
                      img={product.cover_image.url}
                      title={product.product_category}
                      mainTitle={product.title}
                      descp={product.content.html}
                      refs={product.product_refs}
                    ></ProductItems>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Product;
