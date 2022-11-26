import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();

  return (
    <div className="create">
      <h1>Create a new Blog</h1>
      <form>
        <label>Title :</label>
        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <label>Body :</label>
        <input type="text" value={body} onChange={(e) => { setBody(e.target.value) }} />
        <label>Author :</label>
        <select value={author} onChange={(e) => { setAuthor(e.target.value) }} >
          <option value="Evane">Evane</option>
          <option value="Geoffroy">Geoffroy</option>
        </select>
      </form>

      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
