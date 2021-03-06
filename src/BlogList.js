import { Link } from "react-router-dom";

const BlogList = props => {

    const blogs = props.blogs;

    return (
       
        <div>
            <h1>{props.title}</h1>
            {
                blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        
                            <h2>{blog.title}</h2>
                            <p>
                                    <p>Written :  <em>{blog.author}</em></p>
                            </p>
                        
                    </Link>
                </div>
            ))
            }
        </div>
        
    )
}

export default BlogList;