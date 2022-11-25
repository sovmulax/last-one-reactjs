import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: datas,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-detail">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {datas && (
        <article>
            <h2>{datas.title}</h2>
            <p>{ datas.author }</p>
            <p>{ datas.body }</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
