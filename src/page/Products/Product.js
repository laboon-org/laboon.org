import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../grid.css";
import "./product.scss";
import HeaddingSubPage from "../../Components/HeaddingSubPage";
import TitleSubPage from "../../Components/TitleSubPage";
import logo21 from "./imgProduct/logo21.png";
import ProductItems from "./ProductItems";

const Product = ({ products }) => {
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
                <span className="active">All</span>
                <span>DApp</span>
                <span>Game</span>
                <span>Mail</span>
              </div>
              <div className="products__list-items row">
              {!!products &&
                  products.map((product, index) => (
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
