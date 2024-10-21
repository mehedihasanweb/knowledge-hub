import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTimes }) => {
  // console.log(bookmarks.length);
  return (
    <div className="w-1/3 pt-3">
      <div>
        <h2 className="bg-[#6047EC]  p-4 rounded-md  text-[#6047EC] font-semibold bg-opacity-10 border border-[#6047EC] ">
          Spent time on read:{readingTimes}
        </h2>
      </div>
      <div className="bg-gray-300 my-4 p-4 rounded-md">
        <h2 className="text-xl font-semibold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTimes: PropTypes.number,
};

export default Bookmarks;
