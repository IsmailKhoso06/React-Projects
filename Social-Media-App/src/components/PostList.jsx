import React, { useContext } from 'react'
import Post from './Post';
import { PostList as PostListData } from '/src/store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

function PostList() {
  const {postList, addInitialPosts} = useContext(PostListData)

  const handleOnGetPosts = () =>{
    
fetch('https://dummyjson.com/posts/?delay=2000')
.then(res => res.json())
.then(data =>{
   addInitialPosts(data.posts);
});
  }

  return (
    <>
    <div className='row' style={{justifyContent:"space-evenly"}}>
    {postList.length === 0 && <WelcomeMessage onGetClick={handleOnGetPosts} /> }
    {postList.map((post) => 
    <Post key={post.id} post={post}/> 
    )}     

    </div>
    </>
  )
}

export default PostList
