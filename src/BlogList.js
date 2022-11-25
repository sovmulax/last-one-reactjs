import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title, handleClick }) => {
  // (props) or ({blogs, title})
  //const blogs = props.blogs;
  //const title = props.title;

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <h4>{blog.author}</h4>
            <p>{blog.body}</p>
            <button onClick={() => handleClick(blog.id)}>Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
