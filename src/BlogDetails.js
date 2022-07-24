import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './hooks/useFetch'

const BlogDetails = () => {
 const { id } = useParams();
 const navigate = useNavigate();

 const { data: blog, isPending, error } = useFetch('http://localhost:9000/blogs/' + id)

 const handleDelete = () => {
     fetch('http://localhost:9000/blogs/' + blog.id, {
         method: 'DELETE'
     })

     navigate('/');
 }
    return (
        <div className="blog-details">
            { isPending && <div>Loading Blog Post...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <div>
                    <h2>{ blog.title }</h2>
                    <small>Posted by { blog.author }</small>
                    <p>{ blog.body }</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default BlogDetails;