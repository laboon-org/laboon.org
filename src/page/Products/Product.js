import React from 'react'
import Footer from '../../Components/Footer';
import Header from './../../Components/Header';
import '../../grid.css';
import './product.scss';
import HeaddingSubPage from '../../Components/HeaddingSubPage';

import TitleSubPage from '../../Components/TitleSubPage';

import DappsLogo from './imgProduct/DappsLogo.png'
import DappsLogo1 from './imgProduct/DappsLogo1.png'
import DappsLogo2 from './imgProduct/DappsLogo2.png'
import Logogame from './imgProduct/Logogame.png'
import productitem from './imgProduct/productitem.png'


import productitemactive1 from './imgProduct/productitemactive1.png'
import productitemactive2 from './imgProduct/productitemactive2.png'
import arrow from './imgProduct/arrow.png'

import Groupproduct1 from './imgProduct/Groupproduct1.png'
import Groupproduct2 from './imgProduct/Groupproduct2.png'

import logo21 from '../../img/logo21.png'


import ProductItems from './ProductItems';


const Product = () => {
    return (
        <>
            <Header active = {"product"} logo={logo21}></Header>
            <HeaddingSubPage title = {"Products"}></HeaddingSubPage>
            <div className="grid">
                <div className="products__container">
                    <TitleSubPage title={"Laboon Products"} desp ={"Join our digital playground with these products"}></TitleSubPage>

                    <div className="grid wide">
                        <div className="products__content">
                            <div className="products__list-title">
                                <span className="active">All</span>
                                <span>DApp</span>
                                <span>Game</span>
                                <span>Mail</span>
                            </div>
                            <div className="products__list-items row">
                                <ProductItems img={Groupproduct1} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct2} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct1} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct2} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct1} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct2} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct1} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct2} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct1} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct2} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct1} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems img={Groupproduct2} title ={"ABC Game"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
            <Footer></Footer>
        </>
    )
}

export default Product
