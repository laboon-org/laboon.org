import React from 'react'
import blogicon from './imgBlog/blogicon.png'

const BlogItem = ({img}) => {
    return (
        <>
             <div className="blog__content-item col l-6">
                <div className="blog__content-item-img">
                    <img src={img} alt="" className="" />
                </div>
                <div className="blog__content-item-inf">
                    <h2>Launching Game APK in Haiphong store and nationwide 2021</h2>
                    <p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <div>
                        <span>Event</span>
                        <img src={blogicon} alt="" />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogItem
