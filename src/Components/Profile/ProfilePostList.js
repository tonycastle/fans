import { Link } from "react-router-dom";

const ProfilePostList = ({ posts }) => {
  if (posts.length < 1) {
    return (
      <p>
        You have no posts. Maybe this is the perfect time to add your first one!
      </p>
    );
  }

  return posts.map((post) => {
    return (
      <div className="PostListPost" key={post._id}>
        <Link to={`/post/${post._id}`}>
          <h2>{post.post_text}</h2>

          {post.files.length > 0 && ( // TODO should check that files.remote_location exists
            <img
              src={`/images/${post.files[0].remote_location}`}
              alt=""
              className="postListThumbImage"
            />
          )}
        </Link>
      </div>
    );
  });
};

export default ProfilePostList;
