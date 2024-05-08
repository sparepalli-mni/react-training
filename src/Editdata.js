import { Table,Button} from "antd"
import { useState } from "react";
function Editdata ({user,saveUser}) {
    function handleEmail(event){
        user.email = event.target.value
    }
    function handlepassword(event){
        user.password = event.target.value
    }
    function handleExp(event){
        user.exp = event.target.value
    }
    return (
        <div>
             <input type="text" placeholder="username" onChange={handleEmail} defaultValue={user.email} />
                <br />
                <input type="password" placeholder="password"  defaultValue={user.password} onChange={handlepassword}/>
                <br />
                <input type="text" placeholder="Exp"  defaultValue={user.exp} onChange={handleExp}/>
                <br />
                <Button type="primary" onClick={()=>saveUser()}>Save</Button>
        <br/>
        </div>
    )
}

export default Editdata;