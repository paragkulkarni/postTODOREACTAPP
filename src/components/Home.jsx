import { useNavigate } from "react-router-dom";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";



const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  [logout, setLogout] = useState(false);
    useEffect(()=>{
        const isLogin = localStorage.getItem('isLogin');
        console.log("islogin=",isLogin,isLogin&&isLogin!=null)

        if(isLogin){
            console.log("1")
            navigate('/')
        } else if(!isLogin || isLogin===false) {
            console.log("2")
            navigate('/login')
        } 
    },[logout])


    const logBtnClick = () => {
        // localStorage.clear()
        setLogout(true)
        localStorage.removeItem('isLogin')

    }
  
    
    return (
        <section>
                <button onClick={()=>logBtnClick()} className="btn">Logout</button>
            <PostForm />
            <PostContainer />
        </section>
    )
}

export default Home;