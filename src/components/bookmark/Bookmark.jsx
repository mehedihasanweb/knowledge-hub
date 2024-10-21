import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;

  return (
    <div className="p-1">
      <h2 className="mb-2 bg-white p-2 rounded-md font-semibold">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
