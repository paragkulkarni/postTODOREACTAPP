import './App.css';
import PostForm from './components/PostForm';
import PostContainer from './components/PostContainer';
import LoginForm from './components/Login';
import ProtectedRoute from './guardRoute/protectedRout';
import {Provider, } from 'react-redux'
import store from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>

      <Routes>
        {/* <Route path='/login' element={<LoginForm />}>
        </Route> */}
        <Route path='/' element={<ProtectedRoute Component={Home}/>}>
        </Route>
        <Route path='/login' element={<LoginForm />}>
        </Route>
        {/* <ProtectedRoute exact path="/"> */}
          {/* {<PostForm />} */}
          {/* <PostContainer /> */}
        {/* </ProtectedRoute> */}
      </Routes>
    </Provider>
  );
}

export default App;
