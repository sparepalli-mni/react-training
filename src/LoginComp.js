import {Alert, Button} from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function LoginComp() {
    var navigate = useNavigate()
    var [error,setError] = useState(null)
    var user = [{}]
    var userobj = {}
    function handleEmail(event) {
        user.email = event.target.value
        userobj.email = event.target.value
    }
    function handlepassword(event) {
        user.password = event.target.value
        userobj.password = event.target.value
    }
    function demo(){
        if(user.email==='test' && user.password==='test') {
            setError(null)
            navigate('/')
        } else {
            setError("Invalid creds")
        }
    }
    function loginAccount() {
        axios(
            {
                url: "http://apibyauw.eu-4.evennode.com/api" + "/login",
                method: "POST",
                data: userobj
            }).then((response) => {
                console.log(response.data)
                localStorage.token = response.data.token
                navigate('/cakelist')
            }).catch((error) => {
                console.log("error",error)
            })
        }
    return(
    <div> <input type="text" placeholder="username" onChange={handleEmail}/> 
    <br/>
    <input type="password" placeholder  ="password" onChange={handlepassword}/> 
    <br/>
    { error ? <Alert type="danger" message={error}/> : null} 
    <Button type="primary" onClick={loginAccount}>Login</Button>
    <br/>
    </div>
    )
}

export default LoginComp;