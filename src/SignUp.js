import { Button } from "antd"
import axios from "axios"

function SignUp() {
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
    function handleExp(event) {
        user.exp = event.target.value
    }
    function handleUsername(event) {
        user.username = event.target.value
        userobj.name = event.target.value
    }
    function demo() {
        console.log("...")
    }

    function createAccount() {
        console.log(userobj)
        axios(
            {
                url: "http://apibyauw.eu-4.evennode.com/api" + "/register",
                method: "POST",
                data: userobj
            }).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log("error",error)
            })
        }
        return (
            <div> <input type="text" placeholder="username" onChange={handleUsername} />
                <br />
                <input type="password" placeholder="password" onChange={handlepassword} />
                <br />
                <input type="text" placeholder="Exp" onChange={handleExp} />
                <br />
                <input type="text" placeholder="email" onChange={handleEmail} />
                <br />
                <Button type="primary" onClick={createAccount}>SignUp</Button>
                <br />
            </div>
        )
    }

    export default SignUp;