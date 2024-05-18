import React, { useContext } from 'react';
import { IoMdClose } from "react-icons/io"; 
import { PostList } from '../store/post-list-store';


function Post( { post } ) {

  const { deletePost} = useContext(PostList)
  return (
    <>

      <div className="card my-3" style={{width: "25rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
    <IoMdClose />

  </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => 
    <span key={tag} className="badge text-bg-secondary mx-1">{tag}</span>
    
  )}
  </div>

  <div className="alert alert-success" role="alert">
  {post.reactions} people liked this post.
</div>

</div>
    </>
  )
}

export default Post
