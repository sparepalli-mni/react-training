
import { Button} from 'antd';
import { useState } from 'react';
import MarkAttendance from './MarkAttendance';
import Datatable from './Datatable';
function Login() {
    //var usrcount =0
    var [usrcount,setCount] = useState(0); // hooks are functions starts with use and must be used inside component 
    var user = {}
    var [usrObj,setusrObj] = useState([{email: 'sai', password:'teja',exp:2}])
    var [edit,setIsEdit] = useState(true);
    function handleEmail(event){
        user.email = event.target.value
    }
    function handlepassword(event){
        user.password = event.target.value
    }
    function handleExp(event){
        user.exp = event.target.value
    }
    function demo(){
        setusrObj([...usrObj,user])
        
    }
    function usersJoined() {
        usrcount = usrcount + 1
       setCount(usrcount)
    }
    function deleteUser(index){
      usrObj.splice(index,1);
      setusrObj([...usrObj])
    }
    function saveUser(index){
        usrObj.splice(index,1);
        usrObj.push(user)
        setusrObj([...usrObj,user])
        setIsEdit(true)
      }
    return (
        <div> <input type="text" placeholder="username" onChange={handleEmail}/> 
        <br/>
        <input type="password" placeholder  ="password" onChange={handlepassword}/> 
        <br/>
        <input type="text" placeholder  ="Exp" onChange={handleExp}/> 
        <br/>
        <Button type="primary" onClick={demo}>Login</Button>
        <br/>
        <br/>
        <Button type="primary" onClick={usersJoined}>Join</Button>
        <br/>
        <p>No of users Joined : {usrcount}</p>
        <br/>
        <Datatable data={usrObj} deleteUser={deleteUser} saveUser={saveUser} handleEmail={handleEmail} handlepassword={handlepassword} handleExp={handleExp} isedit={edit}/>
        {/* <MarkAttendance/> */}
        </div>
        
    )
}

export default Login;
