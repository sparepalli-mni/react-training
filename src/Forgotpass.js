import {Button} from "antd"

function Forgotpass() {
    var user = [{}]
    function handlepassword(event){
        user.password = event.target.value
    }
    function demo(){
        
    }
    return(
    <div> 
    <input type="password" placeholder  ="password" onChange={handlepassword}/> 
    <br/>
    <Button type="primary" onClick={demo}>Reset</Button>
    <br/>
    </div>
    )
}

export default Forgotpass;