import './App.css';
import Counter from './components/Counter';
import InputCheckbox from './components/InputCheckbox';
import Login from './components/Login';
import LoginMock from './components/LoginMock';
import LoginValidation from './components/LoginValidation'
import Button from './components/Button';
import Videos from './components/Videos/Videos';
import ReactDOM from "react-dom/client";
import TodoList from './components/Todo/TodoList'
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const videos=["youtube","udemy","tutorial"];
function App() {

  return (
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Home />} >
        {/* <Route path="counter" element={<Counter />}/> */}
        <Route path="counter" element={<Counter />}/>
        <Route path="login" element={<Login />}/>
        <Route path="loginvalidation" element={<LoginValidation />} />
        <Route path="loginmock" element={<LoginMock />} />
        {/* <Route path="input" element={<InputCheckbox />} /> */}
        <Route path="videos" element={<Videos videos={videos}/>} />
        <Route path="button" element={<Button />} />
        <Route path="todo" element={<TodoList />} />
   </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
