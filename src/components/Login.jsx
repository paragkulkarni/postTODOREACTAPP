import { useState } from "react";
import { useDispatch } from "react-redux";
import { authCred } from "../redux/action";
import PostForm from "./PostForm";
import PostContainer from "./PostContainer";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    // const isLoginPresent = localStorage.getItem("isLogin");
    // if(isLoginPresent){
    //     localStorage.removeItem("isLogin")
    // }
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChanged = (e) => setUsername(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)

    const submitCredentials = () =>{
        const cred = {
            user: username,
            pwd: password
        };
        console.log("cred --> ",cred)


        setUsername('');
        setPassword('');

        if(cred.user==="root" && cred.pwd==="root"){
            console.log("1 Login success")
            localStorage.setItem('isLogin', true)
            dispatch(authCred(true));
            navigate('/')
        }
        
    }
    return (
        <div>{ 
            <form >
                <input type="text" value={username} onChange={onUsernameChanged}></input>
                <input type="text" value={password} onChange={onPasswordChanged}></input>
                <button type="button" onClick={submitCredentials}>login</button>
            </form>
            // <div>
            //     <PostForm />
            //     <PostContainer />
            // </div>
            }
        </div>
    )
}

export default LoginForm;