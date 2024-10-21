// import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";
// import { addBookmark } from "./redux/features/addBlogSlice/addBookmarkSlice";

function App() {
  // const [bookmarks, setBookmarks] = useState([]);
  // const [readingTimes, setReadingTimes] = useState(0);

  // const handleAddBookmark = (blog, id, time) => {
  // console.log("bookmark added soon", blog);
  // const insteadBookmark = bookmarks?.find((item) => item.id === id);
  // if (!insteadBookmark) {
  //   const newBookmarks = [...bookmarks, blog];
  //   setBookmarks(newBookmarks);
  //   setReadingTimes(readingTimes + time);
  // } else {
  //   const remaining = bookmarks.filter((item) => item.id !== id);
  //   setBookmarks(remaining);
  //   setReadingTimes(readingTimes - time);
  // }
  // addBookmark(blog, id, time);
  // };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <hr className="mt-6 border" />
      <div className="md:flex mt-8 gap-4">
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
