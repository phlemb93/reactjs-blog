import BlogsList from './BlogsList'
import useFetch from './hooks/useFetch'


const Home = () => {

    const { data:blogs, isPending, error } = useFetch('http://localhost:9000/blogs');

  return (
    <div className="home">
        { blogs && <BlogsList blogs={blogs}/> }
        { isPending && <div>Loading Blog Posts...</div> }
        { error && <div>{ error }</div> }
    </div>
  )
}

export default Home;