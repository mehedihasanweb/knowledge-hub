import Bookmark from "../bookmark/Bookmark";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const { bookmarks, readingTimes } = useSelector((state) => state.addbookmark);

  return (
    <div className="w-1/3 pt-3">
      <div>
        <h2 className="bg-[#6047EC]  p-4 rounded-md  text-[#6047EC] font-semibold bg-opacity-10 border border-[#6047EC] ">
          Spent time on read:{readingTimes}
        </h2>
      </div>
      <div className="bg-gray-300 my-4 p-4 rounded-md">
        <h2 className="text-xl font-semibold">
          Bookmarked Blogs: {bookmarks?.length}
        </h2>
        <div>
          {bookmarks?.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
