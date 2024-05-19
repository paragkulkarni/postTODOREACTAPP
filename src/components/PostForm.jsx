import { useState } from "react";
import {v4 as uuid} from 'uuid';
import { useDispatch } from "react-redux";
import { addPost } from "../redux/action";



const PostForm = () =>{

    const dispatch = useDispatch()


    const myStyle = {
        backgroundColor: "white",
        minHeight: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black"
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = (e)=>setTitle(e.target.value);
    const onContentChange = (e)=>setContent(e.target.value);

    const onPostSaved = () => {
        const newPost = {
            id: uuid(),
            title: title,
            content: content
        }
        dispatch(addPost(newPost))
        setTitle('');
        setContent('');

    }


    return (
    <section>
        <h2>Add New Post</h2>
        <form style={myStyle}>
            <label htmlFor="postTitle">Post Title</label>
            <input id="postTitle" name="postTitle" value={title} onChange={onTitleChange}></input>
            <label htmlFor="postContent"></label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChange}></textarea>
            <button type="button" onClick={onPostSaved}>Submit</button>
        </form>
    </section>
    )
}


export default PostForm;
