import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Home2} from './Home';
import reportWebVitals from './reportWebVitals';
import  './report';
import {getReport as two} from './report2';

const root = ReactDOM.createRoot(document.getElementById('root')); // reactDOM is a virtual dom
root.render(
  <React.StrictMode>
    <App />
  {/*  <Home2 /> */}
  </React.StrictMode>
);

var user1 = {
  id:"1",
  phone:123
}
user1.name="sai"
var user2=user1;
var user3 = {...user1} // spread operator 
user1.name="sai teja"
console.log(user3)
console.log(user2)

var phone = user1.phone;
var {phone,salary} = user1; // looks into phone property in user1 (destructuring)
console.log(phone)
var f1=["1","2"]
var f2=["3","4"]
var f3=[...f1,...f2]
var f4=[...f1,f2]
console.log(f3)
console.log(f4)
//one()
two()

//deep copy and shallow copy && lexical scope


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
