import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Femi');

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        const newPost = { title, body, author};

        fetch('http://localhost:9000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        })

        navigate('/');
    }
    return (
        <div className="new-blog">
            <form onSubmit={handleSubmit}>
                <select
                required
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                >
                    <option value="Femi">Femi</option>
                    <option value="Abu">Abu</option>
                    <option value="Alani">Alani</option>
                    <option value="Opeyemi">Opeyemi</option>
                    <option value="Olasumbo">Olasumbo</option>
                </select>
                <textarea 
                placeholder="Body of the post"
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
                <input 
                type="text" 
                placeholder="Title of the post" 
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />

                <button>Add Post</button>
            </form>
        </div>
    )
}

export default NewBlog;