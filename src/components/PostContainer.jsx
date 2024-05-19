import {useSelector, useDispatch} from 'react-redux';
import { deletePost } from '../redux/action';




const PostContainer = ()=>{

    const {posts} = useSelector(state=>state.posts);

    console.log(posts)
    const dispatch = useDispatch();
    const handleDeletePost = (postId)=>{
        dispatch(deletePost(postId))
    }

    
    return (
        <div>
            <h2>Posts</h2>
            <div className="box">
                {posts.map((post)=>(
                    // <span>{post || JSON}</span>
                    <div key={post.id}>
                        <div>{post.title}</div>
                        <div>{post.content}</div>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </div>
                ))}

            </div>
        </div>
    )
}


export default PostContainer;