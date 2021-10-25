import React from 'react'
import Footer from '../../Components/Footer';
import Header from './../../Components/Header';
import HeaddingSubPage from '../../Components/HeaddingSubPage';
import TitleSubPage from '../../Components/TitleSubPage';

import './blog.scss'

import '../../grid.css';

import blogmain from './imgBlog/blogmain.png'
import blogcontentinf from './imgBlog/blog__content-inf.png'

import blogitem1 from './imgBlog/blogitem1.png'
import blogitem2 from './imgBlog/blogitem2.png'
import blogitem3 from './imgBlog/blogitem3.png'
import blogitem4 from './imgBlog/blogitem4.png'
import blogitem5 from './imgBlog/blogitem5.png'
import blogitem6 from './imgBlog/blogitem6.png'
import logo21 from '../../img/logo21.png'
import BlogItem from './BlogItem';


const Blog = () => {
    return (
        <>
        <Header active={"blog"}  logo={logo21}></Header>
        <HeaddingSubPage title={"Blog"}></HeaddingSubPage>
        <div className="grid">
            <div className="blog__container">
                <TitleSubPage title={"Laboon Blog"} desp ={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"}></TitleSubPage>
                <div className="grid wide">
                    <div className="blog__content">
                        <h1>News and Events</h1>
                        <div className="blog__content--main">
                            <div className="row">
                                <div className="blog__content--main__img col l-8">
                                    <img src={blogmain} alt="" />
                                </div>
                                <div className="blog__content--main__inf col l-4">
                                    <div className="blog__content--inf">
                                        <img src={blogcontentinf} alt="" />
                                        <div className="blog__content--inf__right">
                                            <h3>John Brown</h3>
                                            <span>Author</span>
                                        </div>
                                    </div>
                                    <div className="blog__content--inf__desp">
                                        <h2>Launching Game APK in nationwide</h2>
                                        <div>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</p>
                                        </div>
                                        <span>News</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="blog__content-list">
                            <div className="row">
                                <BlogItem img={blogitem1}></BlogItem>
                                <BlogItem img={blogitem2}></BlogItem>
                                <BlogItem img={blogitem3}></BlogItem>
                                <BlogItem img={blogitem4}></BlogItem>
                                <BlogItem img={blogitem5}></BlogItem>
                                <BlogItem img={blogitem6}></BlogItem>
                            </div>
                        </div>
                        {/* <div className="blog__project-idea">
                            <h1>Project’s idea</h1>
                            <div className="blog__project-idea__content">

                            </div>
                        </div>          */}
                    </div>
                </div>
                
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Blog
