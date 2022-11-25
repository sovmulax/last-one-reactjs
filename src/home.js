import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
const Home = () => {
  const [name, setName] = useState("evane");
  const [blogs, setBolgs] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const ClickHandle = () => {
    console.log("You just click on Me");
    setName("geo");
  };

  const ClickAgainHandle = (name) => {
    console.log("hello " + name);
  };

  const handleClick = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBolgs(newBlog);
  };

  useEffect(() => {
    console.log("this function ru at every render or re-render");
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBolgs(data);
          setIsLoading(false)
        });
    }, 1000);
  }, []); //dependency

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={ClickHandle}>Click Me {name}</button>
      <button
        onClick={() => {
          ClickAgainHandle("evane");
        }}
      >
        Click Me
      </button>
      <br />
      <br />
     {isLoading && <div>Loading...</div>} 
      {blogs && (
        <Bloglist
          blogs={blogs}
          title={"Blogs Liste"}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default Home;
