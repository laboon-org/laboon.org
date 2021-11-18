import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
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

  const endpoint = "https://directus.laboon.org/graphql";

  const allProduct = (type) => {
    setCategory(type);
    setCurrentProduct(products);
  };
  const dApps = (type) => {
    const FILMS_QUERY_dApps = `
  {
    projects(filter:{product_category: {category_name:{_eq:"${type}"}}}){
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
    setCategory(type);
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query: FILMS_QUERY_dApps,
      },
    })
      .then((response) => setCurrentProduct(response.data.data.projects))
      .catch((err) => console.error(err));
  };

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
          <TitleSubPage
            title={"Laboon Products"}
            desp={"Join our digital playground with these products"}
          ></TitleSubPage>
          <div className="grid wide">
            <div className="products__content">
              <div className="products__list-title">
                <span
                  className={`${category == "All" && "active"}`}
                  onClick={() => allProduct("All")}
                >
                  All
                </span>
                <span
                  className={`${category == "dApps" && "active"}`}
                  onClick={() => {
                    dApps("dApps");
                  }}
                >
                  dApps
                </span>
                <span
                  className={`${category == "Games" && "active"}`}
                  onClick={() => {
                    dApps("Games");
                  }}
                >
                  Games
                </span>
                <span
                  className={`${category == "Webs" && "active"}`}
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
                      img={product.image.filename_disk}
                      title={product.product_category.category_name}
                      mainTitle={product.title}
                      descp={product.content}
                      refs={product.refs}
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
