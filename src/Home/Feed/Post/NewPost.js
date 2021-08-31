const NewPost = () => {
  const submitHandler = () => {};
  return (
    <div>
      <h2>New Post</h2>
      <form onsubmit={submitHandler} className="newPostForm">
        <input type="textarea" className="post_text"></input>
        <button>post</button>
      </form>
    </div>
  );
};

export default NewPost;
