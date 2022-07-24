import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const BlogsList = ({ blogs }) => {

const eachBlog = blogs.map(blog => {
    return (
        <Link to={`blogs/${blog.id}`}>
            <div key={blog.id}>
                <h3>{blog.title}</h3>
                <small>Written by {blog.author}</small>
                <p>{blog.body}</p>
            </div>
        </Link>
    )
    
}) 

return (
    <div className="blogs-list">
        <div>
            { blogs && eachBlog }
        </div>
    </div>
);
}

export default BlogsList;