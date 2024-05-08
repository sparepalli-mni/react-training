import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Cake from './Cake';
import Mapexp from './Mapexp';
import { Button,Row } from 'antd';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginComp from './LoginComp';
import Homesec from './Homesec';
import SignUp from './SignUp';
import Forgotpass from './Forgotpass';
import Admin from './Admin';
import EditUser from './EditUser';
import Cakes from './Cakes';
import Cake2 from './Cake2';
import Cakelist from './Cakelist';
import SearchCake from './SearchCake';
import DisplayCake from './DisplayCake';
import  A  from './A';
import Cart from './Cart';

function demo() {
  return(
    <Mapexp/>
  )
}
function App() {
  //var name = "sai";
  var data1 = [
    {
      name:"sai",
      price:"22",
      image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      tag:"smart"
    },
    {
      name:"teja",
      price:"22",
      image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    },
  ]
  var money = 10000;
  return ( 
   // <div className="App">
   <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    { /* <label>{name}</label> */}
    {/* <Navbar/> */}
    <div className="App">
      {/* <Home /> */}
     {/* <Login/> */}
      <br/>
      {/* <Button type="primary" onClick={demo}>Login</Button> */}
      </div>

      {/* <Cake name="teja"/>
      <Cake name="react"/>
      <Cake name="java"/> */}
      {/* <Mapexp/> */}
      {/* <A data={money}></A> */}
      <BrowserRouter>
            {/* <Row>
      <Cake data={data1[0]}/>
      <Cake data={data1[1]}/>
      </Row> */}
      <Navbar/>
    <Routes>
         <Route path="/login" element={<LoginComp/>} />
         <Route path="/"  element={<Homesec/>} />
         <Route path="/signup"  element={<SignUp/>} />
         <Route path="/forgot"  element={<Forgotpass/>} />
         <Route path="/admin"  element={<Admin/>} /> 
         <Route path="/edituser/:userid"  element={<EditUser/>} /> 
         <Route path="/cakes"  element={<Cakes/>} /> 
         <Route path="/search"  element={<SearchCake/>} />
         <Route path="/display/:cakeid"  element={<DisplayCake/>} />
         <Route path="/cake/:name/details"  element={<Cake2/>} />
         <Route path="/cakelist"  element={<Cakelist/>} />
         <Route path="/cart"  element={<Cart/>} />

    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
