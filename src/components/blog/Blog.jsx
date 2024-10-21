import PropTypes from "prop-types";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addBookmark } from "../../redux/features/addBlogSlice/addBookmarkSlice";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  const [marked, setMarked] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      <img src={cover} alt="blog_image" className="w-full rounded-md" />
      <div className="flex items-center justify-between">
        <div className="py-4 flex items-center gap-6">
          <img src={author_img} alt="autho image" className="w-14" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span>{reading_time} min read</span>
          <button onClick={() => dispatch(addBookmark(blog))}>
            <FaBookmark className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold ">{title}</h2>
      <p className="py-2">
        {hashtags.map((hash, idx) => (
          <span className="text-gray-400 mr-4" key={idx}>
            #{hash}
          </span>
        ))}
      </p>
      <button
        onClick={() => setMarked(!marked)}
        className="underline text-[#6047EC] text-xl "
      >
        {marked ? "Marked" : "Mark as Read"}
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
