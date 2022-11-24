import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
const Home = () => {
  const [name, setName] = useState("evane");
  const [blogs, setBolgs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const ClickHandle = () => {
    console.log("You just click on Me");
    setName("geo");
  };

  const ClickAgainHandle = (name) => {
    console.log("hello " + name);
  };

  const handleClick = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id)
    setBolgs(newBlog)
  };

  useEffect(() => {
    console.log("this function ru at every render or re-render")
  }, [name]) //dependency

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
      <Bloglist
        blogs={blogs}
        title={"Blogs Liste"}
        handleClick={handleClick}
      ></Bloglist>
    </div>
  );
};

export default Home;
