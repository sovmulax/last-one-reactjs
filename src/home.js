import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("evane");
  const [blogs, setBlogs] = useState([
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
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <h4>{blog.author}</h4>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
