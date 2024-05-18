import React, { useContext, useRef } from 'react'
import {PostList} from '../store/post-list-store'

function CreatePost() {

  const {addPost} = useContext(PostList);

  const titleElement = useRef()
  const bodyElement = useRef()
  const userIdElement = useRef()
  const tagsElement = useRef()
  const reactionsElement = useRef()


  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postbody = bodyElement.current.value;
    const postTags = tagsElement.current.value.split(' ');
    const postReactions = reactionsElement.current.value;
    const postTitle = titleElement.current.value;


    userIdElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = "";
    titleElement.current.value = "";
    
   addPost (userId, postbody, postReactions, postTags, postTitle);
  
  }
  
  return (
    <>
      <form style={{width: "80%", margin:"50px 10%"}} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label"> <b>Title</b></label>
    <input type="text" className="form-control" id="title" placeholder='What is on your mind?' required ref={titleElement}/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label"> <b>Description</b></label>
    <textarea type="text" className="form-control" rows={6} id="body" placeholder='Describe it more...' required  ref={bodyElement} ></textarea>
  </div>

  <div className="mb-3">
    <label htmlFor="userId"  className="form-label"> User ID</label>
    <input type="text" className="form-control" id="userId" placeholder='Input your User Id here' required ref={userIdElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label"> <b>Tags</b></label>
    <input type="text" className="form-control" id="tags" placeholder='Enter related Tags using space to rank your post' ref={tagsElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text" className="form-control" id="reactions" placeholder='Write number of reactions as much you wish...' required ref={reactionsElement} />
  </div>

  <button type="submit" className="btn btn-primary px-5 py-2" style={{float:"right"}}><b>Post</b></button>
</form>
    </>
  )
}

export default CreatePost
